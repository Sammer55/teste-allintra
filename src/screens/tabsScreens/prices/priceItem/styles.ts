import styled from "styled-components/native";

export const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const WrapperKey = styled.View`
  padding: 4px 8px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.background};
`;

export const KeyText = styled.Text`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.4px;
  color: ${({ theme }) => theme.title};
`;

export const Value = styled.Text`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.6px;
  color: ${({ theme }) => theme.title};
`;
