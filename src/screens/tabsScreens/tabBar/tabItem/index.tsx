import React, { JSXElementConstructor, ReactElement } from "react";
import { Wrapper, Label, Bar, BlurCircle } from "./styles";
import { BounceIn, FadeInDown, SlideInDown } from "react-native-reanimated";
import { useTheme } from "styled-components";

type Props = {
  label: string;
  icon: ReactElement<any, string | JSXElementConstructor<any>>;
  onPress: (screen: string) => void;
  screenToNavigate: string;
  currentScreen: string;
};

const TabItem = ({
  label,
  icon,
  onPress,
  screenToNavigate,
  currentScreen,
}: Props) => {
  const isActiveTab = screenToNavigate === currentScreen;
  const theme = useTheme();

  const handlePress = () => onPress(screenToNavigate);

  return (
    <Wrapper onPress={handlePress} isActive={isActiveTab}>
      {React.cloneElement(icon, {
        color: theme.title,
        size: 20,
      })}

      {isActiveTab && (
        <>
          <Label entering={SlideInDown.duration(600)} isActive={isActiveTab}>
            {label}
          </Label>
          <Bar entering={BounceIn.duration(800)} />
          <BlurCircle
            entering={FadeInDown.duration(1200)}
            blurRadius={6}
            source={require("src/assets/images/tabBarBlur.png")}
          />
        </>
      )}
    </Wrapper>
  );
};

export default TabItem;
