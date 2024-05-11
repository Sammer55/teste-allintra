import styled from "styled-components/native";
import Reanimated from "react-native-reanimated";

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled(Reanimated.View)``;

export const Card = styled(Reanimated.View)`
  background-color: white;
  border-radius: 8px;
  justify-content: center;
  padding: 8px;
`;

export const WrapperTitle = styled.View`
  padding: 16px;
  background-color: ${({ theme }) => theme.background};
  border-radius: 8px;
  width: 100%;
  overflow: hidden;
`;

export const Title = styled(Reanimated.Text)`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.6px;
  text-align: center;
  color: ${({ theme }) => theme.title};
`;
