import styled from "styled-components/native";
import Reanimated, { SlideInRight, ZoomOut } from "react-native-reanimated";
import { Dimensions } from "react-native";

const SCREEN_HEIGHT = Dimensions.get("screen").height;

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled(Reanimated.Image)`
  width: 120px;
  height: 120px;
  border-radius: 120px;
  position: absolute;
  z-index: 1;
`;

export const Backdrop = styled(Reanimated.View)`
  width: ${SCREEN_HEIGHT}px;
  height: ${SCREEN_HEIGHT}px;
  border-radius: ${SCREEN_HEIGHT}px;
  position: absolute;
  z-index: 0;
  background-color: ${({ theme }) => theme.primary};
`;