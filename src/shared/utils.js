import React from 'react';

export const serializeScreens = (Stack, screens) => {
  return Object.keys(screens).map(key => (
    <Stack.Screen key={key} name={key.slice(0, -6)} component={screens[key]} />
  ));
};

export const screenKeys = {
  AuthenticationScreen: 'Authentication',
  ExistingAccountScreen: 'ExistingAccount',
  AccountCreationScreen: 'AccountCreation',
  CameraScreen: 'Camera',
  WelcomeScreen: 'Welcome',
  SignatureScreen: 'Signature',
  SuccessfulSignatureScreen: 'SuccessfulSignature',
  FailedSignatureScreen: 'FailedSignature',
};
