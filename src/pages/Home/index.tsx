import React, {useState, useEffect} from 'react';

import {Container, Title} from './styles';

import Switch from '../../components/Switch';

import {useTheme} from '../../hooks/useTheme';

const Home: React.FC = () => {
  const {toggleTheme, theme} = useTheme();

  const [activeTrackColor, setActiveTrackColor] = useState(
    theme === 'dark' ? '#fa0' : '#aaa',
  );
  const [inactiveTrackColor, setInactivectiveTrackColor] = useState(
    theme === 'dark' ? '#aaa' : '#fa0',
  );

  useEffect(() => {
    setActiveTrackColor(theme === 'dark' ? '#fa0' : '#aaa');
    setInactivectiveTrackColor(theme === 'dark' ? '#aaa' : '#fa0');
  }, [theme]);

  return (
    <Container>
      <Title>
        {theme === 'dark'
          ? 'Join the dark side'
          : 'Please turn off! The light hurts my eyes'}
      </Title>

      <Switch
        activeTrackColor={activeTrackColor}
        inactiveTrackColor={inactiveTrackColor}
        thumbColor="#fff"
        value={theme === 'dark'}
        handleOnPress={toggleTheme}
      />
    </Container>
  );
};

export default Home;
