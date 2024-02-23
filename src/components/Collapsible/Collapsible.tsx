import RNCollapsible, {
  CollapsibleProps as RNCollapsibleProps,
} from 'react-native-collapsible';
import {ReactNode} from 'react';
import {
  backgroundColor,
  border,
  createRestyleComponent,
  layout,
  spacing,
  spacingShorthand,
} from '@shopify/restyle';
import {RestyleTypes, Theme} from '@styles';

export interface CollapsibleProps extends RNCollapsibleProps, RestyleTypes {
  children: ReactNode;
}
export const Collapsible = createRestyleComponent<CollapsibleProps, Theme>(
  [backgroundColor, spacing, spacingShorthand, layout, border],
  RNCollapsible,
);
