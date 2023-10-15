import {ThemeName, colorRegistry, themeRegistry} from '@styles';
import {Switch, SwitchProps, View, ViewProps} from 'react-native';
import {Text, TextProps} from '../Texts';

interface SwitchFormProps extends ViewProps {
  type?: ThemeName;
  textProps?: TextProps;
  switchOptions: {
    title?: string;
    switchProps?: SwitchProps;
  }[];
}

export function SwitchForm({
  switchOptions = [],
  type = 'box-switch',
  textProps,
  ...props
}: SwitchFormProps) {
  return (
    <View {...props}>
      {switchOptions?.map((option, index) => (
        <View key={index} style={[themeRegistry[type]]}>
          <Text {...textProps}>{option?.title}</Text>
          <Switch
            trackColor={{
              true: colorRegistry['blue-gray'],
              false: colorRegistry['lavender-gray'],
            }}
            thumbColor={
              option.switchProps?.value
                ? colorRegistry['midnight-blue']
                : colorRegistry['lavender-gray']
            }
            {...option.switchProps}
          />
        </View>
      ))}
    </View>
  );
}
