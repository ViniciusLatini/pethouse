import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';

const Tabs = createBottomTabNavigator();

const TabsRoutes = () => {
  <Tabs.Navigator>
    <Tabs.Screen name="Home" component={Home} />
  </Tabs.Navigator>;
};

export default TabsRoutes;
