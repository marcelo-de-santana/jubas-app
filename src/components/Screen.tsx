import {
  Keyboard,
  Pressable,
  PressableProps,
  View,
  ViewProps,
} from 'react-native';
import {ColorName, colorRegistry} from '@styles';

interface ScreenProps extends PressableProps {
  children?: React.ReactNode;
  color?: ColorName;
}
export function Screen({children, color = 'lightGray', ...props}: ScreenProps) {
  const $containerStyle = {
    flex: 1,
    backgroundColor: colorRegistry[color],
    paddingHorizontal: 20,
    paddingVertical: 10,
  };

  return (
    <Pressable
      style={$containerStyle}
      onPress={props.onPress ?? Keyboard.dismiss}
      {...props}>
      {children}
    </Pressable>
  );
}
