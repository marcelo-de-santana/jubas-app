import React from 'react';
import {Text} from 'react-native';

export function TextAlertError({title}: {title: string}) {
  return <Text style={{fontSize: 12, color: 'red'}}>{title}</Text>;
}
