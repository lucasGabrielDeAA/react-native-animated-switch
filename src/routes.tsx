import React from 'react';
import {StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import {useTheme} from '~/hooks/useTheme';

import Home from '~/pages/Home';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  const {theme} = useTheme();

  return (
    <>
      <StatusBar
        backgroundColor={theme === 'dark' ? '#000' : '#ddd'}
        barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
      />

      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerTransparent: true, headerTitle: ''}}
        />
      </Stack.Navigator>
    </>
  );
};

export default Routes;
