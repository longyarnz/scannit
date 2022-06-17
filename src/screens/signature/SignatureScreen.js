import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { theme } from '@styles';
import { AvatarHeaderOptions, screenKeys } from '@shared';

export function SignatureScreen({ navigation }) {
  useEffect(() => {
    navigation.setOptions(AvatarHeaderOptions);
  }, [navigation]);

  return (
    <View style={[theme.container, styles.wrapper]}>
      <Text style={styles.captionTitle}>Sign Transaction</Text>
      <View style={styles.box}>
        <Text style={styles.captionText}>Do you want to sign transaction:</Text>
        <Text style={styles.captionText}>
          Proof of delivery of package 123-XYZ
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate(screenKeys.SuccessfulSignatureScreen)
          }>
          <Text style={styles.buttonText}>Sign</Text>
        </TouchableOpacity>
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
    marginBottom: 90,
    fontFamily: 'Inter-Bold',
  },
  button: {
    width: 320,
    height: 70,
    backgroundColor: '#BCBCBC',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#000000',
    fontFamily: 'Inter-Bold',
    textAlign: 'center',
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
    marginBottom: 40,
  },
});
