import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const WhiteHeader = ({ navigation }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={navigation.goBack}>
      <Icon
        style={styles.icon}
        name="arrow-back-ios"
        color="#000000"
        size={16}
      />
      <Text style={styles.headerText}>Back</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    color: '#000000',
    fontFamily: 'Inter-Bold',
    fontSize: 16,
  },
  icon: {
    marginRight: 5,
  },
});
