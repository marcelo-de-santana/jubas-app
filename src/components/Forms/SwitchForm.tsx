import {ThemeName, button, colorRegistry, text, themeRegistry} from '@styles';
import {Switch, SwitchProps, View, ViewProps} from 'react-native';
import {TextComponent, TextComponentProps} from '../Texts';

interface SwitchFormProps extends ViewProps {
  type?: ThemeName;
  textProps?: TextComponentProps;
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
          <TextComponent {...textProps}>{option?.title}</TextComponent>
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
