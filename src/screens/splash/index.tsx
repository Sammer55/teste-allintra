import { useEffect } from "react";
import { Backdrop, Logo, Wrapper } from "./styles";
import { SlideInRight, ZoomOut } from "react-native-reanimated";
import { CommonActions, useNavigation } from "@react-navigation/native";
import logo from "src/assets/images/logoCircle.png";

const ANIMATION_DURATION = 3000;

const SplashScreen = () => {
  const navigation = useNavigation();

  const onAnimationFinished = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "TabsScreens" }],
      })
    );
  };

  useEffect(() => {
    setTimeout(() => {
      onAnimationFinished();
    }, ANIMATION_DURATION);
  }, []);

  return (
    <Wrapper>
      <Logo entering={SlideInRight.duration(1000)} source={logo} />
      <Backdrop entering={ZoomOut.springify(ANIMATION_DURATION)} />
    </Wrapper>
  );
};

export default SplashScreen;
