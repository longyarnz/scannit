import React, { useCallback } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { screenKeys } from '@shared';

export const Scanner = ({ setInitialSnapPoint }) => {
  const navigation = useNavigation();

  const onLayout = event => {
    const { height } = event.nativeEvent.layout;
    const windowHeight = Dimensions.get('window').height;
    const snapPoint = windowHeight - height - 150;
    setInitialSnapPoint(snapPoint);
  };

  const onSuccess = useCallback(() => {
    navigation.navigate(screenKeys.SignatureScreen);
    // Linking.openURL(e.data).catch(err =>
    //   console.error('An error occured', err),
    // );
  }, [navigation]);

  return (
    <View style={styles.noView} onLayout={onLayout}>
      <QRCodeScanner
        reactivate={true}
        onRead={onSuccess}
        flashMode={RNCamera.Constants.FlashMode.auto}
        containerStyle={[styles.containerStyle, styles.noView]}
        topViewStyle={styles.noView}
        bottomViewStyle={styles.noView}
        showMarker={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    alignSelf: 'stretch',
  },
  noView: {
    flex: 0,
  },
});
