import { Dimensions } from "react-native";
import theme from "src/styles/theme";

export const MAX_LINE_POINTS = 40;
export const CANDLE_SIZE = 10;
export const CHART_WIDTH = Dimensions.get("window").width - 66;
export const CHART_HEIGHT = 200;

export const TOOLTIP_PROPS = {
  xGutter: 16,
  yGutter: 16,
  style: {
    backgroundColor: theme.title,
    borderRadius: 4,
    padding: 4,
  },
  textStyle: {
    color: "white",
    fontSize: 14,
  },
};
