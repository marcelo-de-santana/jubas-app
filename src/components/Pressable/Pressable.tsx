import {
  backgroundColor,
  border,
  createRestyleComponent,
  layout,
  spacing,
  spacingShorthand,
} from '@shopify/restyle';
import {RestyleTypes, Theme} from '@styles';
import {
  PressableProps as RNPressableProps,
  TouchableOpacity as RNTouchableOpacity,
} from 'react-native';

export type PressableProps = RNPressableProps & RestyleTypes;
export const Pressable = createRestyleComponent<PressableProps, Theme>(
  [backgroundColor, spacing, spacingShorthand, layout, border],
  RNTouchableOpacity,
);
