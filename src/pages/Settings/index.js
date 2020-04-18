import React, {useState, useEffect, useContext} from 'react';
import {Switch} from 'react-native';
import PropTypes from 'prop-types';

import {themeContext} from '../../contexts';

import {Container, MenuList, MenuItem, Label} from './styles';

const Settings = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const {theme, toggleTheme} = useContext(themeContext);

  const toggleSwitch = () => {
    toggleTheme();
    setIsEnabled((previousState) => !previousState);
  };

  useEffect(() => {
    navigation.setParams({
      title: 'Settings',
      headerTintColor: theme.navText,
      backgroundColor: theme.nav,
    });
  }, [theme]);
  const Data = [
    {
      id: 'abc',
      title: 'Dark Mode',
    },
  ];

  return (
    <Container>
      <MenuList
        data={Data}
        KeyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <MenuItem>
            <Label>{item.title}</Label>
            <Switch
              trackColor={{false: theme.tabTextInative, true: theme.button}}
              thumbColor="#fff"
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </MenuItem>
        )}
      />
    </Container>
  );
};

Settings.propTypes = {
  navigation: PropTypes.shape({
    setParams: PropTypes.func,
  }).isRequired,
};

export default Settings;
