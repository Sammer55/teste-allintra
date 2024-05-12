import { useEffect, useMemo, useState } from "react";
import {
  Card,
  CoinName,
  Content,
  Value,
  Wrapper,
  WrapperCoin,
  WrapperValues,
} from "./styles";
import LineChart from "src/components/charts/lineChart";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FormatCoinToBRL from "src/utils/formatCoin";
import { FadeIn, SlideInDown } from "react-native-reanimated";
import { Candle, Ticker } from "binance-api-node";
import { binanceClient } from "src/api/binanceClient";
import CandleChart from "src/components/charts/candleChart";
import LottieView from "lottie-react-native";
import chartLoading from "src/assets/animations/chartLoading.json";
import { CANDLE_SIZE, CHART_WIDTH, MAX_LINE_POINTS } from "src/utils/chart";

const ANIMATION_SIZE = { width: 80, height: 80 };

const CANDLES_TO_SHOW = Math.floor(CHART_WIDTH / CANDLE_SIZE);

const ChartLoading = () => (
  <LottieView style={ANIMATION_SIZE} source={chartLoading} loop autoPlay />
);

const Bitcoin = () => {
  const [lineData, setLineData] = useState([]);
  const [candleData, setCandleData] = useState([]);

  const lastBestId = useMemo(
    () => lineData[lineData.length - 1]?.value || 0,
    [lineData]
  );

  const handleLineEventUpdate = (e: Ticker) => {
    const bestBid = Number(e?.bestBid);
    const dontRepeatPrevious = bestBid !== lastBestId;

    if (dontRepeatPrevious) {
      setLineData((prev) => {
        if (prev.length >= MAX_LINE_POINTS)
          return prev
            .slice(1)
            .concat({ value: bestBid, eventTime: e?.eventTime });

        return [...prev, { value: bestBid, eventTime: e?.eventTime }];
      });
    }
  };

  useEffect(() => {
    binanceClient.ws.ticker("BTCBRL", handleLineEventUpdate);
  }, []);

  const handleCandleEventUpdate = (e: Candle) => {
    const newCandle = {
      open: Number(e.open),
      close: Number(e.close),
      high: Number(e.high),
      low: Number(e.low),
    };

    setCandleData((prev) => {
      if (prev.length >= CANDLES_TO_SHOW)
        return prev.slice(1).concat(newCandle);

      return [...prev, newCandle];
    });
  };

  useEffect(() => {
    binanceClient.ws.candles("BTCBRL", "1m", handleCandleEventUpdate);
  }, []);

  const value =
    lineData.length > 0 &&
    FormatCoinToBRL(lineData[lineData.length - 1]?.value || 0);

  const hasLineData = lineData.length > 0;
  const hasCandleData = candleData.length > 0;

  return (
    <Wrapper>
      <Content>
        <WrapperCoin>
          <FontAwesome5 name="bitcoin" size={32} color="#f79318" />
          <CoinName>Bitcoin/Real Brasileiro</CoinName>
        </WrapperCoin>

        <WrapperValues>
          {!!value && <Value entering={FadeIn.duration(1500)}>{value}</Value>}
        </WrapperValues>
      </Content>

      <Card entering={SlideInDown.duration(1500)}>
        {hasLineData ? <LineChart data={lineData} /> : <ChartLoading />}
      </Card>

      <Card entering={SlideInDown.duration(2500)}>
        {hasCandleData ? <CandleChart data={candleData} /> : <ChartLoading />}
      </Card>
    </Wrapper>
  );
};

export default Bitcoin;
