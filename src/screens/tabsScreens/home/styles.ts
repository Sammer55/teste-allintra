import styled from "styled-components/native";

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;

export const Content = styled.View`
  padding: 0 16px;
  gap: 24px;
`;
