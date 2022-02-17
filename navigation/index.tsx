/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */




import { FontAwesome, MaterialCommunityIcons,EvilIcons,MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
//screens
import { screens } from '../routenavigations';
import MoreScreen from '../screens/MoreScreen';
import ModalScreen from '../screens/ProfileScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import Dashboard from '../screens/Dashboard';
import MyFines from '../screens/MyFines';
import MyContributions from '../screens/MyContributions';
import ProfileScreen from '../screens/ProfileScreen';
import ForgotPassword from '../screens/ForgotPassword';


//end of screens
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import LoginScreen from '../screens/LoginScreen';
//icon imports
 
//end of icon imports
//responsivity


import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';



//endof responsivity


//Authentication context imports
import * as Keychain from 'react-native-keychain';


import { AuthContext } from '../Context/AuthContext';
import { AxiosContext } from '../Context/AxiosContext';
import Spinner from '../components/Spinner';

//end Authentication context imports
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const authContext = React.useContext(AuthContext);
  const [status, setStatus] = React.useState('loading');
  const loadJWT = React.useCallback(async () => {
    try {
      const value = await Keychain.getGenericPassword();
      const jwt = JSON.parse(value.password);

      authContext.setAuthState({
        accessToken: jwt.accessToken || null,
        refreshToken: jwt.refreshToken || null,
        authenticated: jwt.accessToken !== null,
      });
      setStatus('success');
    } catch (error) {
      setStatus('error');
      console.log(`Keychain Error: ${error.message}`);
      authContext.setAuthState({
        accessToken: null,
        refreshToken: null,
        authenticated: false,
      });
    }
  }, []);

  React.useEffect(() => {
    loadJWT();
  }, [loadJWT]);

  if (status === 'loading') {
    return <Spinner />;
  }




  if(authContext?.authState?.authenticated === false){
    return(
      <Stack.Navigator>
<Stack.Screen  name='LoginScreen' component={LoginScreen} options={{headerShown:false}}/>
<Stack.Screen name='ForgotPassword' component={ForgotPassword} options={{headerShown:false}}/>
</Stack.Navigator>



    );
  }
  else{

    return(

      <Stack.Navigator>
      <Stack.Screen  name="Root" component={BottomTabNavigator} options={{ headerShown: false, }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Screen name="Profile" component={ProfileScreen} />

        {
        screens.map((item,id)=>(
          <Stack.Screen key={id} name={item.name} component={item.screencomponent}/>
        ))
      }

    </Stack.Navigator>
    );


  }

}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */



const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  const navigation=useNavigation();

  return (
    <BottomTab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        headerRight: () => (
          <Pressable
            onPress={() => navigation.navigate('Profile')}
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}>
            <EvilIcons
              name="user"
              size={scale(29)}
              color={Colors[colorScheme].text}
              style={{ marginRight: scale(15) }}
            />
          </Pressable>
        ),


      }}>
      <BottomTab.Screen
        name="Dashboard"
        component={Dashboard}
        options={({ navigation }: RootTabScreenProps<'Dashboard'>) => ({
          tabBarLabel:'Dashboard',
          headerShadowVisible: false,
          tabBarLabelStyle:{
            fontSize:scale(12)
          },
          title: 'Chama254',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="tablet-dashboard" size={scale(30)} color={color} />,

        })}
      />
      <BottomTab.Screen
        name="MyFines"
        component={MyFines}
        options={{
          headerShadowVisible: false,
          title: 'Chama254',
          tabBarIcon: ({ color }) =>  <MaterialIcons name="payment" color={color} size={scale(30)} />,
          tabBarLabel:"MyFines",
          tabBarLabelStyle:{
            fontSize:scale(12)
          },
        }}
      />
            <BottomTab.Screen
        name="MyContributions"
        component={MyContributions}
        options={{
          headerShadowVisible: false,
          title: 'Chama254',
          tabBarIcon: ({ color }) => <MaterialIcons name="payments" color={color} size={scale(30)}/>,
          tabBarLabel:"MyContributions",
          tabBarLabelStyle:{
            fontSize:scale(12)
          },
        }}
      />
                  <BottomTab.Screen
        name="MoreScreen"
        component={MoreScreen}
        options={{
          title: 'Chama254',
          tabBarIcon: ({ color }) => <MaterialIcons name="more-vert" color={color} size={scale(30)}/>,
          tabBarLabel:"More",
          tabBarLabelStyle:{
            fontSize:scale(12)
          },
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={scale(30)} style={{ marginBottom: scale(-3) }} {...props} />;
}
