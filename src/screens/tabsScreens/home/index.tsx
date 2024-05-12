import React from "react";
import { Content, Wrapper } from "./styles";
import Bitcoin from "./bitcoin";

const HomeScreen = () => {
  return (
    <Wrapper>
      <Content>
        <Bitcoin />
      </Content>
    </Wrapper>
  );
};

export default HomeScreen;
