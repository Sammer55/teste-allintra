import React from "react";
import { Content, Wrapper } from "./styles";
import BitcoinToBrl from "./bitcoinToBrl";

const HomeScreen = () => {
  return (
    <Wrapper>
      <Content>
        <BitcoinToBrl />
      </Content>
    </Wrapper>
  );
};

export default HomeScreen;
