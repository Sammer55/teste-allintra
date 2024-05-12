import styled from "styled-components/native";

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;

export const Content = styled.View`
  padding: 0 16px;
`;

export const Card = styled.View`
  gap: 8px;
  background-color: white;
  padding: 0 16px;
  border-radius: 8px;
  overflow: hidden;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.title};
  margin-top: 16px;
`;

export const EmptyText = styled.Text`
  color: ${({ theme }) => theme.subtitle};
  font-size: 14px;
`;
