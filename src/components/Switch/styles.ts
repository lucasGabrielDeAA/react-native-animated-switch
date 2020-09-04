import styled from 'styled-components/native';

import Animated from 'react-native-reanimated';

export const Container = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin: 8px 0;
`;

export const Button = styled.TouchableOpacity``;

export const Label = styled.Text`
  color: ${(props) => props.theme.secondary};
  font-size: 18px;
  margin-right: 8px;
`;

export const Content = styled(Animated.View)`
  border-radius: 36.5px;
  padding: 2px;
  width: 50px;
`;

export const Dot = styled(Animated.View)`
  border-radius: 24px;
  height: 24px;
  width: 24px;
`;
