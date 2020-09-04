import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  background: ${(props) => props.theme.primary};
  flex: 1;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.secondary};
  font-size: 18px;
  margin: 8px 0;
`;
