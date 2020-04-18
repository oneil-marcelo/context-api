import {createStackNavigator} from 'react-navigation-stack';

import Settings from '../../../pages/Settings';

const settingStack = createStackNavigator({
  settings: {
    screen: Settings,
    navigationOptions: ({navigation}) => ({
      headerStyle: {
        backgroundColor: navigation.getParam('backgroundColor'),
      },
      headerTintColor: navigation.getParam('headerTintColor'),
      headerTitle: navigation.getParam('title'),
      headerTitleAlign: 'center',
    }),
  },
});

export default settingStack;
