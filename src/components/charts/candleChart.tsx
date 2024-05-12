import { CandlestickChart } from "react-native-wagmi-charts";
import {
  CANDLE_SIZE,
  CHART_HEIGHT,
  CHART_WIDTH,
  TOOLTIP_PROPS,
} from "src/utils/chart";

const CandleChart = ({ data }) => {
  return (
    <CandlestickChart.Provider data={data}>
      <CandlestickChart height={CHART_HEIGHT} width={CHART_WIDTH}>
        <CandlestickChart.Candles
          useAnimations
          candleProps={{
            width: CANDLE_SIZE,
          }}
        />

        <CandlestickChart.Crosshair>
          <CandlestickChart.Tooltip {...TOOLTIP_PROPS} />
        </CandlestickChart.Crosshair>
      </CandlestickChart>
    </CandlestickChart.Provider>
  );
};

export default CandleChart;
