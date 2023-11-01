import {View, ViewProps} from 'react-native';
import {ButtonComponent} from './Buttons';
import {ColorName, ThemeName, colorRegistry, themeRegistry} from '@styles';

interface ModalProps extends ViewProps {
  children?: React.ReactNode;
  color?: ColorName;
  type?: ThemeName;
  onPress?: () => void;
}
export function Modal({
  children,
  type = 'box-modal-form',
  color = 'light-gray',
  onPress,
  ...props
}: ModalProps) {
  return (
    <View
      style={[themeRegistry[type], {backgroundColor: colorRegistry[color]}]}
      {...props}>
      {onPress ? (
        <ButtonComponent type="close-window" onPress={onPress} />
      ) : null}
      {children}
    </View>
  );
}
