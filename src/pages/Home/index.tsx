import React from 'react';

import {Container, Title} from './styles';

import Switch from '../../components/Switch';

import {useTheme} from '../../hooks/useTheme';

const Home: React.FC = () => {
  const {toggleTheme, theme} = useTheme();

  return (
    <Container>
      <Title>
        {theme === 'dark' ? 'Join the dark side' : 'The light hurts my eyes'}
      </Title>

      <Switch
        handleOnPress={toggleTheme}
        activeTrackColor="#007Aff"
        inactiveTrackColor="#f2f5f7"
        thumbColor="#fff"
        value={theme === 'dark'}
      />
    </Container>
  );
};

export default Home;
