import { FadeInRight, SlideInRight } from "react-native-reanimated";
import { Card, Content, Title, Wrapper, WrapperTitle } from "./styles";
import developerAnimation from "src/assets/animations/developer.json";
import LottieView from "lottie-react-native";
import { useRoute } from "@react-navigation/native";

const ANIMATION_SIZE = { width: 280, height: 280 };

const InDevelopmentScreen = ({ navigation }) => {
  const route = useRoute();

  return (
    <Wrapper>
      <Content entering={FadeInRight.duration(1000)}>
        <Card entering={SlideInRight.duration(800)}>
          <WrapperTitle>
            <Title entering={SlideInRight.duration(1000)}>
              Hello word, esta é a pagina {route.name}
            </Title>
          </WrapperTitle>
          <LottieView
            style={ANIMATION_SIZE}
            source={developerAnimation}
            loop
            autoPlay
          />
        </Card>
      </Content>
    </Wrapper>
  );
};

export default InDevelopmentScreen;
