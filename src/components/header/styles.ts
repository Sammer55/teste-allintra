import styled from "styled-components/native";

export const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  background-color: ${({ theme }) => theme.title};
  padding: 4px;
  border-radius: 100px;
  margin: 0 16px 16px 16px;
`;

export const Logo = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 40px;
`;

export const Name = styled.Text`
  font-size: 18px;
  color: white;
  font-weight: 700;
  letter-spacing: 0.6px;
`;
