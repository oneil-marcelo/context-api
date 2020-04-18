import {createStackNavigator} from 'react-navigation-stack';

import Main from '../../../pages/Main';
import User from '../../../pages/User';

const userStack = createStackNavigator({
  main: {
    screen: Main,
    navigationOptions: ({navigation}) => ({
      headerStyle: {
        backgroundColor: navigation.getParam('backgroundColor'),
      },
      headerTintColor: navigation.getParam('headerTintColor'),
      headerTitle: navigation.getParam('title'),
      headerTitleAlign: 'center',
    }),
  },
  user: {
    screen: User,
    navigationOptions: ({navigation}) => ({
      headerStyle: {
        backgroundColor: navigation.getParam('backgroundColor'),
      },
      headerTintColor: navigation.getParam('headerTintColor'),
      headerTitle: navigation.getParam('title'),
      headerTitleAlign: 'center',
      headerBackTitleVisible: false,
    }),
  },
});

export default userStack;
