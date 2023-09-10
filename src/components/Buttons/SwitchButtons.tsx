import {button, text} from '@styles';
import {
  StyleProp,
  Switch,
  SwitchProps,
  Text,
  View,
  ViewStyle,
} from 'react-native';

type SwitchButtonsProps = {
  style?: StyleProp<ViewStyle> | undefined;
  switchOptions: {title?: string; switchProps: SwitchProps}[];
};

export function SwitchButtons({style, switchOptions}: SwitchButtonsProps) {
  return (
    <View style={style}>
      {switchOptions.map((option, index) => (
        <View key={index} style={button.switchButtonSpaced}>
          <Text style={text.blueText14}>{option.title}</Text>
          <Switch
            {...option.switchProps}
            trackColor={{
              true: '#9BA7BF',
              false: '#CCCED9',
            }}
            thumbColor={option.switchProps?.value ? '#161C26' : '#CCCED9'}
          />
        </View>
      ))}
    </View>
  );
}
