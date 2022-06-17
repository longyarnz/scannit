import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import React, { useEffect } from 'react';
import { theme } from '@styles';
import { AvatarHeaderOptions, screenKeys } from '@shared';

export function SuccessfulSignatureScreen({ navigation }) {
  useEffect(() => {
    navigation.setOptions(AvatarHeaderOptions);
  }, [navigation]);

  return (
    <View style={[theme.container, styles.wrapper]}>
      <Text style={styles.captionTitle}>Sign Successful</Text>
      <Text style={styles.captionText}>
        Proof of delivery of package 123-XYZ
      </Text>
      <View style={styles.icon}>
        <Icon name="check" color="#000000" size={144} />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate(screenKeys.CameraScreen)}>
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>
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
    marginBottom: 50,
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
  captionText: {
    fontSize: 16,
    color: '#000000',
    fontFamily: 'Inter-Bold',
    textAlign: 'center',
    marginBottom: 50,
  },
  icon: {
    marginBottom: 50,
    alignItems: 'center',
  },
});
