import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import React, { useEffect } from 'react';
import { theme } from '@styles';
import { AvatarHeaderOptions } from '@shared';

export function FailedSignatureScreen({ navigation }) {
  useEffect(() => {
    navigation.setOptions(AvatarHeaderOptions);
  }, [navigation]);

  return (
    <View style={[theme.container, styles.wrapper]}>
      <View style={styles.icon}>
        <Icon name="close" color="#000000" size={144} />
      </View>
      <Text style={styles.captionTitle}>Not Authorized</Text>
      <View style={styles.box}>
        <Text style={styles.captionText}>
          You are not authorized to sign this package
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#D9D9D9',
    padding: 40,
    justifyContent: 'flex-start',
  },
  captionTitle: {
    fontSize: 20,
    color: '#000000',
    marginBottom: 20,
    fontFamily: 'Inter-Bold',
  },
  box: {
    marginBottom: 'auto',
    justifyContent: 'center',
  },
  captionText: {
    fontSize: 16,
    color: '#000000',
    fontFamily: 'Inter-Bold',
    textAlign: 'center',
  },
  icon: {
    marginVertical: 60,
  },
});
