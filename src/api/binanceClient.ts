import Binance from "binance-api-react-native";

export const binanceClient = Binance({
  apiKey: process.env.EXPO_PUBLIC_BINANCE_API_KEY,
  apiSecret: process.env.EXPO_PUBLIC_BINANCE_API_SECRET,
});
