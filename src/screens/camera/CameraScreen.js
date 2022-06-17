import { View, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { theme } from '@styles';
import { AvatarHeaderOptions } from '@shared';
import { Scanner, TransactionHistory } from './components';

export function CameraScreen({ navigation }) {
  const [initialSnapPoint, setInitialSnapPoint] = useState('10%');

  useEffect(() => {
    navigation.setOptions(AvatarHeaderOptions);
  }, [navigation]);

  return (
    <View style={[theme.container, styles.wrapper]}>
      <Scanner setInitialSnapPoint={setInitialSnapPoint} />
      <TransactionHistory initialSnapPoint={initialSnapPoint} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#D9D9D9',
    justifyContent: 'flex-start',
  },
});
