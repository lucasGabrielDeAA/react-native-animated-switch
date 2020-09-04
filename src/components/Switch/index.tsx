import React, {useEffect, useState, useCallback} from 'react';
import Animated, {interpolateColors, spring} from 'react-native-reanimated';

import {Container, Button, Label, Content, Dot} from './styles';

interface Props {
  handleOnPress: any;
  activeTrackColor: string;
  inactiveTrackColor: string;
  thumbColor: string;
  value: boolean;
  label: string;
}

const Switch: React.FC<Props> = ({
  handleOnPress,
  activeTrackColor,
  inactiveTrackColor,
  thumbColor,
  value,
  label,
}) => {
  const [switchTranslate] = useState(new Animated.Value(0));

  useEffect(() => {
    if (value) {
      spring(switchTranslate, {
        toValue: 21,
        mass: 1,
        damping: 15,
        stiffness: 120,
        overshootClamping: false,
        restSpeedThreshold: 0.001,
        restDisplacementThreshold: 0.001,
      }).start();
    } else {
      spring(switchTranslate, {
        toValue: 0,
        mass: 1,
        damping: 15,
        stiffness: 120,
        overshootClamping: false,
        restSpeedThreshold: 0.001,
        restDisplacementThreshold: 0.001,
      }).start();
    }
  }, [value, switchTranslate]);

  const interpolateBackgroundColor = {
    backgroundColor: interpolateColors(switchTranslate, {
      inputRange: [0, 22],
      outputColorRange: [inactiveTrackColor, activeTrackColor],
    }),
  };

  const memoizedOnSwitchPressCallback = useCallback(() => {
    handleOnPress(!value);
  }, [handleOnPress, value]);

  return (
    <Container>
      <Label>{label}</Label>

      <Button onPress={memoizedOnSwitchPressCallback}>
        <Content style={interpolateBackgroundColor}>
          <Dot
            style={[
              {
                elevation: 4,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.23,
                shadowRadius: 2.62,
              },
              {backgroundColor: thumbColor},
              {
                transform: [
                  {
                    translateX: switchTranslate,
                  },
                ],
              },
            ]}
          />
        </Content>
      </Button>
    </Container>
  );
};

export default Switch;
