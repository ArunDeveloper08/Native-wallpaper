import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

import Screen1 from './views/Screen1';
import {RecoilRoot} from 'recoil';
import Screen2 from './views/Screen2';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
   
      <RecoilRoot>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="S1">
            <Stack.Screen name="S1" component={Screen1} 
           options={{
            title:"Wallpaper",
            headerTintColor:"gray",
            headerTitleStyle:{
              fontWeight:"bold",
            }
           }}
            />
            <Stack.Screen name="S2" component={Screen2}
            options={{
            title:"Image"
            }}
            />
          </Stack.Navigator>
        </NavigationContainer>
        {/* <Screen1/> */}
      </RecoilRoot>

  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
});
