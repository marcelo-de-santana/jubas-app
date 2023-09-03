import {button, text, theme} from '@styles';
import {useState} from 'react';
import {StyleProp, Switch, Text, View, ViewStyle} from 'react-native';

type SwitchButtonsProps = {
  style?: StyleProp<ViewStyle> | undefined;
  switchOptions: {index: number | string; title: string}[];
  switchValue: string | number;
  changeSwitchValue: (value: string | number) => void;
};

export function SwitchButtons({
  style,
  switchOptions,
  switchValue,
  changeSwitchValue,
}: SwitchButtonsProps) {
  return (
    <View style={style}>
      {switchOptions.map((option, index) => (
        <View key={index} style={button.switchButtonSpaced}>
          <Text style={text.blueText14}>{option.title}</Text>
          <Switch
            trackColor={{true: '#9BA7BF', false: '#CCCED9'}}
            thumbColor={switchValue === option.index ? '#161C26' : '#CCCED9'}
            value={switchValue === option.index}
            onChange={() => changeSwitchValue(option.index)}
          />
        </View>
      ))}
    </View>
  );
}
