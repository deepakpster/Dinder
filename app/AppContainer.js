import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import LoginScreen from './screens/Login'

const SimpleApp = StackNavigator({
  Home: { screen: LoginScreen },
});

export default SimpleApp
