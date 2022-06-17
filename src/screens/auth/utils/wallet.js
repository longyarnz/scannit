import '@ethersproject/shims';
import { Wallet } from '@ethersproject/wallet';
import { PermissionsAndroid, Platform } from 'react-native';
import { pickDirectory, pick, types } from 'react-native-document-picker';
import RNFetchBlob from 'rn-fetch-blob';
import * as RNFS from 'react-native-fs';
import * as Keychain from 'react-native-keychain';
import RNFU from 'react-native-file-utils';
import { FileSystem, Util } from 'react-native-file-access';

export const createWalletFromMnemonic = () => {};

export const createWalletFromKey = () => {};

export const createNewWallet = async () => Wallet.createRandom();

export const createFile = async (
  filename = 'test.txt',
  content = 'Lorem ipsum dolor sit amet',
) => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: 'Storage Permission Required',
        message: 'Application needs access to your storage to download File',
        buttonPositive: 'Yes',
      },
    );

    if (
      granted === PermissionsAndroid.RESULTS.GRANTED ||
      Platform.OS === 'ios'
    ) {
      // const path = await pick({
      //   presentationStyle: 'fullScreen',
      //   type: [types.allFiles],
      // });
      // console.log(path);

      // console.log(decodeURIComponent(path.uri));
      const gg = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      );

      if (gg === PermissionsAndroid.RESULTS.GRANTED) {
        // RNFU.getPathFromURI(
        //   'content://com.android.externalstorage.documents/tree/primary%3ATest%2FAnother%2FYet%20another',
        // )
        //   .then(filePath => console.log(filePath))
        //   .catch(err => console.log(err));
        // const stat = await RNFetchBlob.fs.stat(
        //   'content://com.android.externalstorage.documents/tree/primary%3ATest%2FAnother%2FYet%20another',
        // );
        // const stat = await FileSystem.statDir(path.uri);
        // console.log(stat);
        RNFetchBlob.fs
          .createFile(
            'content://com.android.externalstorage.documents/document/primary%3ATest%2FAnother%2FYet%20another%2FPH.txt',
            'Lekan',
            'utf8',
          )
          .then(stats => {
            console.log(stats.path);
          })
          .catch(err => console.log(err));
        RNFS.stat(
          'content://com.android.externalstorage.documents/document/primary%3ATest%2FAnother%2FYet%20another%2FPHRASES.txt',
          content,
          'utf8',
        )
          .then(() => {
            console.log('FILE WRITTEN!');
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  } catch (err) {
    console.error(err);
  }
};

export const saveMnemonicToFile = async wallet => {
  // const phrases = wallet.mnemonic.phrase.split(' ');
  // const mnemonic = `
  //   ${phrases.slice(0, 4).join(' ')}
  //   ${phrases.slice(4, 8).join(' ')}
  //   ${phrases.slice(8).join(' ')}
  // `;
  console.log('mnemonic');
  await createFile('PHRASES.txt', 'mnemonic');
};

export const secureWalletKey = async wallet => {
  Keychain.resetGenericPassword().then(() => {
    Keychain.setGenericPassword('wallet', wallet.privateKey, {
      accessControl: Keychain.ACCESS_CONTROL.BIOMETRY_ANY_OR_DEVICE_PASSCODE,
      securityLevel:
        Platform.OS === 'ios'
          ? undefined
          : Keychain.SECURITY_LEVEL.SECURE_HARDWARE,
    }).catch(err => console.log(err));
  });
};
