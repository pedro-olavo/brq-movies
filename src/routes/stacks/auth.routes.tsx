import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Screens } from '@routes/types';
import { SignIn } from '@modules';

const AuthStack = createStackNavigator();

export function AuthRoutesStack() {

  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen
        name={Screens.SignIn}
        component={SignIn}
      />
    </AuthStack.Navigator>
  );
}
