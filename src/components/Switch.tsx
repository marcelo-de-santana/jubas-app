import {colorRegistry} from '@styles';
import {Switch as SwitchRN, SwitchProps as SwitchPropsRN} from 'react-native';

export interface SwitchProps extends SwitchPropsRN {}

export function Switch({value, ...props}: SwitchProps) {
  return (
    <SwitchRN
      trackColor={{
        true: colorRegistry['blue-gray'],
        false: colorRegistry['lavender-gray'],
      }}
      thumbColor={
        value === true
          ? colorRegistry['midnight-blue']
          : colorRegistry['lavender-gray']
      }
      value={value}
      {...props}
    />
  );
}
