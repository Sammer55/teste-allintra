import {
  Card,
  CoinName,
  Content,
  Value,
  Wrapper,
  WrapperCoin,
  WrapperValues,
} from "./styles";
import { useEffect, useMemo, useState } from "react";
import LineChart from "src/components/charts/lineChart";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FormatCoinToBRL from "src/utils/formatCoin";
import { SlideInDown } from "react-native-reanimated";
import { Ticker } from "binance-api-node";
import { binanceClient } from "src/api/binanceClient";

const BitcoinToBrl = () => {
  const [data, setData] = useState([]);

  const lastBestId = useMemo(() => data[data.length - 1]?.value || 0, [data]);

  const handleEventUpdate = (e: Ticker) => {
    const bestBid = Number(e?.bestBid);
    const dontRepeatPrevious = bestBid !== lastBestId;

    if (dontRepeatPrevious) {
      setData((prev) => [...prev, { value: bestBid, eventTime: e?.eventTime }]);
    }
  };

  useEffect(() => {
    binanceClient.ws.ticker("BTCBRL", handleEventUpdate);
  }, []);

  const value = FormatCoinToBRL(data[data.length - 1]?.value || 0);

  return (
    <Wrapper>
      <Content>
        <WrapperCoin>
          <FontAwesome5 name="bitcoin" size={32} color="#f79318" />
          <CoinName>Bitcoin/Real Brasileiro</CoinName>
        </WrapperCoin>

        <WrapperValues>
          <Value>{value}</Value>
        </WrapperValues>
      </Content>

      <Card entering={SlideInDown.duration(2500)}>
        {data.length > 0 && <LineChart data={data} />}
      </Card>
    </Wrapper>
  );
};

export default BitcoinToBrl;
