import { Logo, Name, Wrapper } from "./styles";
import logo from "src/assets/images/logoCircle.png";

const Header = () => {
  return (
    <Wrapper>
      <Logo source={logo} />
      <Name>Teste Allintra</Name>
    </Wrapper>
  );
};

export default Header;
