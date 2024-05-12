import { useEffect, useMemo, useState } from "react";
import {
  Card,
  ChartLoadingText,
  CoinName,
  Content,
  Value,
  Wrapper,
  WrapperChartLoading,
  WrapperCoin,
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
import { useToast } from "react-native-toast-notifications";

const ANIMATION_SIZE = { width: 80, height: 80 };

const CARD_SHADOW = {
  shadowColor: "#323232",
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.15,
  shadowRadius: 1.5,
  elevation: 4,
};

const CANDLES_TO_SHOW = Math.floor(CHART_WIDTH / CANDLE_SIZE);

const ChartLoading = () => (
  <WrapperChartLoading>
    <LottieView style={ANIMATION_SIZE} source={chartLoading} loop autoPlay />
    <ChartLoadingText>Estamos carregando os gráficos...</ChartLoadingText>
  </WrapperChartLoading>
);

const Bitcoin = () => {
  const [lineData, setLineData] = useState([]);
  const [candleData, setCandleData] = useState([]);

  const { show } = useToast();

  const lastBestId = useMemo(
    () => lineData[lineData.length - 1]?.value || 0,
    [lineData]
  );

  const handleLineEventUpdate = (e: Ticker) => {
    try {
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
    } catch (error) {
      show("Ocorreu um erro ao atualizar o gráfico de área.", {
        type: "danger",
      });
    }
  };

  useEffect(() => {
    try {
      binanceClient.ws.ticker("BTCBRL", handleLineEventUpdate);
    } catch (error) {
      show("Ocorreu um erro ao buscar os dados do gráfico de área.", {
        type: "danger",
      });
    }
  }, []);

  const handleCandleEventUpdate = (e: Candle) => {
    try {
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
    } catch (error) {
      show("Ocorreu um erro ao atualizar o gráfico de vela.", {
        type: "danger",
      });
    }
  };

  useEffect(() => {
    try {
      binanceClient.ws.s("BTCBRL", "1m", handleCandleEventUpdate);
    } catch (error) {
      show("Ocorreu um erro ao buscar os dados do gráfico de vela.", {
        type: "danger",
      });
    }
  }, []);

  const value = useMemo(
    () => FormatCoinToBRL(lineData[lineData.length - 1]?.value || 0),
    [lineData]
  );
  const hasLineData = useMemo(() => lineData.length > 0, [lineData]);
  const hasCandleData = useMemo(() => candleData.length > 0, [candleData]);

  return (
    <Wrapper>
      <Content>
        <FontAwesome5 name="bitcoin" size={40} color="#f79318" />

        <WrapperCoin>
          <CoinName>Bitcoin / Real Brasileiro</CoinName>
          {!!value && <Value entering={FadeIn.duration(1500)}>{value}</Value>}
        </WrapperCoin>
      </Content>

      <Card style={CARD_SHADOW} entering={SlideInDown.duration(1500)}>
        {hasLineData ? <LineChart data={lineData} /> : <ChartLoading />}
      </Card>

      <Card style={CARD_SHADOW} entering={SlideInDown.duration(2500)}>
        {hasCandleData ? <CandleChart data={candleData} /> : <ChartLoading />}
      </Card>
    </Wrapper>
  );
};

export default Bitcoin;
