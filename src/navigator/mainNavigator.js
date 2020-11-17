import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile174817Navigator from '../features/UserProfile174817/navigator';
import Settings174816Navigator from '../features/Settings174816/navigator';
import Settings174814Navigator from '../features/Settings174814/navigator';
import SignIn2174812Navigator from '../features/SignIn2174812/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile174817: { screen: UserProfile174817Navigator },
Settings174816: { screen: Settings174816Navigator },
Settings174814: { screen: Settings174814Navigator },
SignIn2174812: { screen: SignIn2174812Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
