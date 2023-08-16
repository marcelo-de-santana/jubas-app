import React from 'react';
import {Text} from 'react-native';

export function TextAlertError({errorMessage}: {errorMessage: string}) {
  return <Text style={{fontSize: 12, color: 'red'}}>{errorMessage}</Text>;
}
