import {View, ViewProps, ViewStyle} from 'react-native';
import {Switch, SwitchProps} from '../Switch';
interface FormSwitchProps extends ViewProps {
  switchProps?: SwitchProps;
}

export function FormSwitch({switchProps, ...props}: FormSwitchProps) {
  const $switchFormStyle: ViewStyle = {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  };
  return (
    <View style={$switchFormStyle} {...props}>
      <Switch {...switchProps} />
    </View>
  );
}
