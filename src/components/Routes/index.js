import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import {themeContext} from '../../contexts';
import CustomTabBar from '../CustomTabBar';

import userStack from './contexts/userStack';
import settingStack from './contexts/settingStack';

const IconPerson = ({focused}) => {
  const {theme} = useContext(themeContext);
  return (
    <Icon
      name="person"
      size={26}
      color={focused ? theme.tabTextActive : theme.tabTextInative}
    />
  );
};

IconPerson.propTypes = {
  focused: PropTypes.bool.isRequired,
};

const IconMenu = ({focused}) => {
  const {theme} = useContext(themeContext);
  return (
    <Icon
      name="menu"
      size={26}
      color={focused ? theme.tabTextActive : theme.tabTextInative}
    />
  );
};

IconMenu.propTypes = {
  focused: PropTypes.bool.isRequired,
};

const tab = createBottomTabNavigator(
  {
    user: {
      screen: userStack,
      navigationOptions: {
        // eslint-disable-next-line react/prop-types
        tabBarIcon: ({focused}) => <IconPerson focused={focused} />,
      },
    },
    settings: {
      screen: settingStack,
      navigationOptions: {
        // eslint-disable-next-line react/prop-types
        tabBarIcon: ({focused}) => <IconMenu focused={focused} />,
      },
    },
  },
  {
    tabBarComponent: CustomTabBar,
  }
);

const Routes = createAppContainer(tab);

export default Routes;
