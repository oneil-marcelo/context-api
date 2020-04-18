import React, {useContext} from 'react';
import {StatusBar} from 'react-native';

import {themeContext} from '../../contexts';

const CustomStatusBar = () => {
  const {theme} = useContext(themeContext);
  return <StatusBar barStyle="light-content" backgroundColor={theme.nav} />;
};

export default CustomStatusBar;
