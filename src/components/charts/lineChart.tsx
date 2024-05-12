import { useTheme } from "styled-components";
import {
  TLineChartDataProp,
  LineChart as WLineChart,
} from "react-native-wagmi-charts";
import { CHART_WIDTH, CHART_HEIGHT, TOOLTIP_PROPS } from "src/utils/chart";

type Props = {
  data: TLineChartDataProp;
};

const LineChart = ({ data }: Props) => {
  const theme = useTheme();

  return (
    <WLineChart.Provider data={data}>
      <WLineChart width={CHART_WIDTH} height={CHART_HEIGHT}>
        <WLineChart.Path color={theme.title}>
          <WLineChart.Gradient color="green" />
        </WLineChart.Path>
        <WLineChart.CursorCrosshair>
          <WLineChart.Tooltip {...TOOLTIP_PROPS} />
        </WLineChart.CursorCrosshair>
      </WLineChart>
    </WLineChart.Provider>
  );
};

export default LineChart;
