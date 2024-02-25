import {
  VariantProps,
  backgroundColor,
  border,
  createRestyleComponent,
  createVariant,
  layout,
  spacing,
  spacingShorthand,
} from '@shopify/restyle';
import {RestyleTypes, Theme} from '@styles';

export type ListSeparatorProps = RestyleTypes &
  VariantProps<Theme, 'separatorsVariants'>;

export const ListSeparator = createRestyleComponent<ListSeparatorProps, Theme>([
  backgroundColor,
  spacing,
  spacingShorthand,
  layout,
  border,
  createVariant({themeKey: 'separatorsVariants'}),
]);

export const separatorsVariants = {
  defaults: {
    backgroundColor: 'primaryContrast',
    borderColor: 'primaryContrast',
    borderWidth: 0.5,
  },
  first: {
    borderColor: 'primaryContrast',
    backgroundColor: 'primaryContrast',
    borderWidth: 1,
  },
};
