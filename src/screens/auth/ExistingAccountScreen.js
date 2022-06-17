import React, { useEffect } from 'react';
import { theme } from '@styles';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { WhiteHeader } from './components';
import { screenKeys } from '@shared';

const getHeader = navigation => () => <WhiteHeader navigation={navigation} />;
const phrases = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
];

export const ExistingAccountScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: getHeader(navigation),
      headerShadowVisible: false,
      headerBackVisible: false,
    });
  }, [navigation]);

  const seedPhrases = phrases.map(phrase => (
    <Text style={styles.phrase} key={phrase}>
      {phrase}
    </Text>
  ));

  return (
    <View style={[theme.container, styles.wrapper]}>
      <Text style={styles.captionTitle}>Please enter your seed phrase</Text>
      <View style={styles.box}>{seedPhrases}</View>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: screenKeys.CameraScreen }],
          })
        }>
        <Text style={styles.buttonText}>I have secured it</Text>
      </TouchableOpacity>
      <Text style={styles.captionText}>I forgot my seed phrase</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#FFFFFF',
    border: 'none',
    justifyContent: 'space-evenly',
    padding: 20,
  },
  button: {
    width: 320,
    height: 70,
    backgroundColor: '#D9D9D9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 'auto',
    marginBottom: 36,
  },
  buttonText: {
    color: '#000000',
    fontFamily: 'Inter-Bold',
  },
  captionTitle: {
    fontSize: 20,
    color: '#000000',
    marginTop: 162,
    marginBottom: 45,
    fontFamily: 'Inter-Bold',
  },
  captionText: {
    fontSize: 16,
    color: '#000000',
    fontFamily: 'Inter-Bold',
    marginBottom: 45,
  },
  box: {
    borderRadius: 5,
    maxWidth: 400,
    width: '100%',
    height: 180,
    paddingVertical: 40,
    paddingHorizontal: 15,
    backgroundColor: '#D9D9D9',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'space-between',
    flexWrap: 'wrap',
  },
  phrase: {
    color: '#000000',
    fontFamily: 'Inter-Bold',
    width: '25%',
    textAlign: 'center',
  },
});
