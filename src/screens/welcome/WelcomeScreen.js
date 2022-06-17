import React from 'react';
import { theme } from '@styles';
import { View, Text, TouchableOpacity } from 'react-native';

export function WelcomeScreen({ navigation }) {
  return (
    <View style={theme.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
        <Text>WelcomeScreen</Text>
      </TouchableOpacity>
    </View>
  );
}
