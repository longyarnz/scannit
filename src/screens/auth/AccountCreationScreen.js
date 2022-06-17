import React, { useContext, useEffect, useMemo } from 'react';
import { theme } from '@styles';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { WhiteHeader } from './components';
import { screenKeys, walletContext } from '@shared';

const getHeader = navigation => () => <WhiteHeader navigation={navigation} />;

export const AccountCreationScreen = ({ navigation, params }) => {
  const [wallet] = useContext(walletContext);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: getHeader(navigation),
      headerShadowVisible: false,
      headerBackVisible: false,
    });
  }, [navigation, params, wallet]);

  const phrases = wallet.mnemonic.phrase.split(' ');
  const seedPhrases = useMemo(
    () =>
      phrases.map(phrase => (
        <Text style={styles.phrase} key={phrase}>
          {phrase}
        </Text>
      )),
    [phrases],
  );

  return (
    <View style={[theme.container, styles.wrapper]}>
      <Text style={styles.captionTitle}>Account Created</Text>
      <Text style={styles.captionText}>
        Here’s your 12 word seed phrase, please guard it with your life
      </Text>
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
  },
  buttonText: {
    color: '#000000',
    fontFamily: 'Inter-Bold',
  },
  captionTitle: {
    fontSize: 20,
    color: '#000000',
    marginBottom: 20,
    fontFamily: 'Inter-Bold',
  },
  captionText: {
    fontSize: 16,
    color: '#000000',
    fontFamily: 'Inter-Regular',
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
