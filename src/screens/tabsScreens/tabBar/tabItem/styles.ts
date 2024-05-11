import styled from "styled-components/native";
import Reanimated from "react-native-reanimated";

export const Wrapper = styled.TouchableOpacity<{ isActive: boolean }>`
  align-items: center;
  display: flex;
  justify-content: space-between;
  flex: 1;
  padding: 8px;
  position: relative;
`;

export const Label = styled(Reanimated.Text)<{ isActive: boolean }>`
  color: ${({ theme }) => theme.title};
  font-size: 12px;
  font-weight: 500;
  z-index: 1;
`;

export const Bar = styled(Reanimated.View)`
  height: 4px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: ${({ theme }) => theme.primary};
  position: absolute;
  width: 100%;
  top: 0px;
  z-index: 1;
`;

export const BlurCircle = styled(Reanimated.Image)`
  width: 88px;
  height: 88px;
  position: absolute;
  bottom: -48px;
  z-index: 0;
`;
