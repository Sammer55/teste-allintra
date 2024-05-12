import { Dimensions } from "react-native";
import { useTheme } from "styled-components";
import { LineChart as WLineChart } from "react-native-wagmi-charts";
import Reanimated, { FadeIn } from "react-native-reanimated";

const LineChart = ({ data }) => {
  const theme = useTheme();

  return (
    <Reanimated.View entering={FadeIn.duration(1000).delay(2000)}>
      <WLineChart.Provider data={data}>
        <WLineChart width={Dimensions.get("window").width - 66} height={200}>
          <WLineChart.Path color={theme.title} />
          <WLineChart.CursorCrosshair>
            <WLineChart.Tooltip
              cursorGutter={60}
              xGutter={16}
              yGutter={16}
              style={{
                backgroundColor: theme.title,
                borderRadius: 4,
                padding: 4,
              }}
              textStyle={{
                color: "white",
                fontSize: 14,
              }}
            />
          </WLineChart.CursorCrosshair>
        </WLineChart>
      </WLineChart.Provider>
    </Reanimated.View>
  );
};

export default LineChart;
