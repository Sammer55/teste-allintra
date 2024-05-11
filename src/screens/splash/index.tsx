import { SlideInRight, ZoomOut } from "react-native-reanimated";
import { Backdrop, Logo, Wrapper } from "./styles";
import logo from "src/assets/images/logo.png";

const SplashScreen = () => {
  return (
    <Wrapper>
      <Logo entering={SlideInRight.duration(1000)} source={logo} />
      <Backdrop entering={ZoomOut.springify(3000)} />
    </Wrapper>
  );
};

export default SplashScreen;
