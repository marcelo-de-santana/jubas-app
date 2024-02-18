import {Keyboard, Pressable, PressableProps} from 'react-native';
import {ColorName, colors} from '@styles';

interface ScreenProps extends PressableProps {
  children?: React.ReactNode;
  color?: ColorName;
}
export function Screen({children, color = 'lightGray', ...props}: Readonly<ScreenProps>) {
  const $containerStyle = {
    flex: 1,
    backgroundColor: colors[color],
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
