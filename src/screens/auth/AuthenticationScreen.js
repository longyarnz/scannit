import React, { useEffect, useState, useContext } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { ShouldRender } from 'should-render';
import { theme } from '@styles';
import { screenKeys, walletContext } from '@shared';
import { createNewWallet, saveMnemonicToFile, secureWalletKey } from './utils';

export function AuthenticationScreen({ navigation }) {
  const [, setWallet] = useContext(walletContext);
  const [isCreatingWallet, setIsCreatingWallet] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const createAccount = async () => {
    setIsCreatingWallet(true);
  };

  useEffect(() => {
    saveMnemonicToFile();
    // isCreatingWallet &&
    //   createNewWallet().then(async wallet => {
    //     setWallet(wallet);
    //     secureWalletKey(wallet);
    //     await saveMnemonicToFile(wallet);
    //     // navigation.navigate(screenKeys.AccountCreationScreen);
    //     setIsCreatingWallet(false);
    //   });
  }, [isCreatingWallet, navigation, setWallet]);

  return (
    <View style={[theme.container, styles.wrapper]}>
      <View style={styles.banner}>
        <Text style={styles.bannerText}>Tradelink</Text>
      </View>
      <View style={styles.caption}>
        <Text style={styles.captionTitle}>Welcome to Tradelink</Text>
        <Text style={styles.captionText}>Some subtext/welcome message</Text>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.button} onPress={createAccount}>
          <ShouldRender if={isCreatingWallet}>
            <ActivityIndicator size="small" color="#000000" />
          </ShouldRender>
          <ShouldRender if={!isCreatingWallet}>
            <Text style={styles.buttonText}>Create an Account</Text>
          </ShouldRender>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate(screenKeys.ExistingAccountScreen)}>
          <Text style={styles.buttonText}>Already have a seed phrase</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'space-between',
    padding: 30,
  },
  banner: {
    width: 130,
    height: 130,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D9D9D9',
    margin: 40,
    borderRadius: 5,
  },
  bannerText: {
    color: '#000000',
    fontSize: 16,
    fontFamily: 'Inter-Bold',
  },
  caption: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
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
  bottom: {
    width: '100%',
    height: 170,
    marginTop: 'auto',
    justifyContent: 'space-between',
    alignItems: 'center',
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
});
