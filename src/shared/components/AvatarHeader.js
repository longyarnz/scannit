import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export const AvatarHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.avatar}>J</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 64,
    paddingVertical: 12,
    backgroundColor: '#BCBCBC',
  },
  wrapper: {
    width: 40,
    height: 40,
    backgroundColor: '#D9D9D9',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color: '#000000',
  },
});

export const AvatarHeaderOptions = {
  headerTitle: '',
  headerLeft: AvatarHeader,
  headerShadowVisible: false,
  headerBackVisible: false,
  headerStyle: {
    backgroundColor: '#BCBCBC',
  },
};
