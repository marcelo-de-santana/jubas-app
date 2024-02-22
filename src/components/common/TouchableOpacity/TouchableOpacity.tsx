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
  TouchableOpacityProps as RNTouchableOpacityProps,
  TouchableOpacity as RNTouchableOpacity,
} from 'react-native';

export type TouchableOpacityProps = RNTouchableOpacityProps & RestyleTypes;
export const TouchableOpacity = createRestyleComponent<
  TouchableOpacityProps,
  Theme
>(
  [backgroundColor, spacing, spacingShorthand, layout, border],
  RNTouchableOpacity,
);