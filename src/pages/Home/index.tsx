import React from 'react';

import {Container, Title, Switches} from './styles';

import Switch from '~/components/Switch';

import {useTheme} from '~/hooks/useTheme';

const Home: React.FC = () => {
  const {toggleTheme, theme} = useTheme();

  return (
    <Container>
      <Title>
        {theme === 'dark'
          ? 'Welcome to the dark side'
          : 'Please turn off! The light hurts my eyes'}
      </Title>

      <Switches>
        <Switch
          activeTrackColor="#fa0"
          inactiveTrackColor="#aaa"
          thumbColor="#fff"
          label={theme === 'dark' ? 'Dark theme enabled' : 'Enable dark theme'}
          value={theme === 'dark'}
          handleOnPress={toggleTheme}
        />

        <Switch
          activeTrackColor="#007AFF"
          inactiveTrackColor="#aaa"
          thumbColor="#fff"
          label={
            theme === 'light' ? 'Light theme enabled' : 'Enable light theme'
          }
          value={theme === 'light'}
          handleOnPress={toggleTheme}
        />
      </Switches>
    </Container>
  );
};

export default Home;
