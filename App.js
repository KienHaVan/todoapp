import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import {Provider} from 'react-redux';
import store from './src/redux-toolkit/configureStore';
import StackNavigator from './src/navigation/StackNavigator';
import SplashScreen from './src/screens/SplashScreen';
import MainStackNavigator from './src/navigation/MainStackNavigator';

const App = () => {
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <MainStackNavigator />
      </View>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
