import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

const TabBar = screens => createAppContainer(createBottomTabNavigator(screens));

export default TabBar;