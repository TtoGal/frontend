import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeIcon from '@assets/images/home.svg';
import HomeStackNav from '@stackNav/Auth';

const Tab = createBottomTabNavigator();

const AppTabNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeStackNav"
        component={HomeStackNav}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) =>
            focused ? (
              <HomeIcon style={{color: '#fafafa'}} />
            ) : (
              <HomeIcon style={{color: '#585A6C'}} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppTabNav;
