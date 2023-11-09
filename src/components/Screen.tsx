import {Pressable, View, ViewProps} from 'react-native';
import {ColorName, colorRegistry} from '@styles';

interface ScreenProps extends ViewProps {
  children?: React.ReactNode;
  color?: ColorName;
  onPress?: () => void;
}
export function Screen({
  children,
  color = 'light-gray',
  onPress,
  ...props
}: ScreenProps) {
  const $containerStyle = {
    flex: 1,
    backgroundColor: colorRegistry[color],
    paddingHorizontal: 20,
    paddingVertical: 10,
  };

  if (onPress) {
    return (
      <Pressable style={$containerStyle} onPress={onPress}>
        {children}
      </Pressable>
    );
  }

  return (
    <View style={$containerStyle} {...props}>
      {children}
    </View>
  );
}
