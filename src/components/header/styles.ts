import styled from "styled-components/native";

export const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  border-radius: 100px;
  margin: 0 16px 16px 16px;
`;

export const Logo = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 32px;
`;

export const Name = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.title};
  font-weight: 700;
  letter-spacing: 0.6px;
`;
