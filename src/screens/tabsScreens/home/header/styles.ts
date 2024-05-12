import styled from "styled-components/native";

export const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  background-color: ${({ theme }) => theme.title};
  border: 1px solid ${({ theme }) => theme.title};
  border-bottom-width: 2px;
  padding: 4px 6px;
  border-radius: 8px;
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
