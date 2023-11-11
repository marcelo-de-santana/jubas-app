import {colorRegistry} from '@styles';
import {Switch as RNSwitch, SwitchProps as RNSwitchProps} from 'react-native';
import {Text, TextProps} from './Text';

export interface SwitchProps extends RNSwitchProps {
  label?: string;
  textProps?: TextProps;
}

export function Switch({label, textProps, ...props}: SwitchProps) {
  return (
    <>
      <Text align="justify" size="S" color="steelBlue" {...textProps}>
        {label}
      </Text>
      <RNSwitch
        trackColor={{
          true: colorRegistry['blueGray'],
          false: colorRegistry['lavenderGray'],
        }}
        thumbColor={
          props.value === true
            ? colorRegistry['midnightBlue']
            : colorRegistry['lavenderGray']
        }
        {...props}
      />
    </>
  );
}
