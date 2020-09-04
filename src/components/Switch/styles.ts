import styled from 'styled-components/native';

import Animated from 'react-native-reanimated';

export const Container = styled.TouchableOpacity``;

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
