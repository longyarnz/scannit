import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as screens from './src/screens';
import { theme, serializeScreens, walletContext } from './src';

const Stack = createNativeStackNavigator();
const screenComponents = serializeScreens(Stack, screens);
const { Provider } = walletContext;

function App() {
  const state = useState({});

  return (
    <Provider value={state}>
      <SafeAreaView style={theme.fullFlex}>
        <GestureHandlerRootView style={theme.fullFlex}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                animation: 'slide_from_bottom',
              }}>
              {screenComponents}
            </Stack.Navigator>
          </NavigationContainer>
        </GestureHandlerRootView>
      </SafeAreaView>
    </Provider>
  );
}

export default App;
