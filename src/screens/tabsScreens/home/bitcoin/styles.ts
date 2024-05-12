import styled from "styled-components/native";
import Reanimated from "react-native-reanimated";

export const Wrapper = styled.View`
  gap: 8px;
  border-radius: 8px;
  overflow: hidden;
  padding: 8px 0;
`;

export const Content = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 8px;
`;

export const WrapperCoin = styled.View`
  display: flex;
  justify-content: center;
`;

export const CoinIcon = styled.View`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.border};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CoinName = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.title};
  letter-spacing: 0.4px;
`;

export const Card = styled(Reanimated.View)`
  height: 200px;
  border-radius: 8px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Value = styled(Reanimated.Text)`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.title};
  letter-spacing: 0.4px;
`;

export const WrapperCoinValue = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

export const CoinValue = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: green;
  color: ${({ theme }) => theme.title};
`;

export const WrapperChartLoading = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ChartLoadingText = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.subtitle};
  letter-spacing: 0.6px;
`;
