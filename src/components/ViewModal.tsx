import {ColorName, ThemeName, colorRegistry, theme} from '@styles';
import {Pressable, PressableProps, SafeAreaView, ViewProps} from 'react-native';

interface ViewModalProps {
  children?: React.ReactNode;
  color?: ColorName;
  type?: ThemeName;
  viewProps?: ViewProps;
  pressableProps?: PressableProps;
}

export function ViewModal({
  children,
  type = 'container',
  color = 'black-transparent',
  viewProps,
  pressableProps,
}: ViewModalProps) {
  return (
    <SafeAreaView
      style={[theme[type], {backgroundColor: colorRegistry[color]}]}
      {...viewProps}>
      <Pressable style={[theme['container']]} {...pressableProps} />
      {children}
    </SafeAreaView>
  );
}
