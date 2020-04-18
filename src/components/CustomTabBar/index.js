import React, {useContext} from 'react';
import {BottomTabBar} from 'react-navigation-tabs';

import {themeContext} from '../../contexts';

const CustomTabBar = (props) => {
  const {theme} = useContext(themeContext);
  return (
    <BottomTabBar
      {...props}
      activeTintColor={theme.tabTextActive}
      inactiveTintColor={theme.tabTextInative}
      showIcon
      style={{
        backgroundColor: theme.tab,
      }}
    />
  );
};

export default CustomTabBar;
