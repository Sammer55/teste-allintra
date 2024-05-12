import styled from "styled-components/native";

export const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
  position: relative;
  padding: 4px 6px;
  gap: 8px;
  overflow: hidden;
  border-radius: 100px;
  margin: 16px;
`;

export const Logo = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 32px;
  z-index: 1;
`;

export const Name = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.title};
  font-weight: 600;
  letter-spacing: 0.6px;
  z-index: 1;
`;
