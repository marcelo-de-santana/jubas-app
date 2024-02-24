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

type ListSeparatorProps = RestyleTypes &
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
    borderWidth: 1,
    borderColor: 'primaryContrast',
  },
  first: {
    backgroundColor: 'primaryContrast',
    borderColor: 'primaryContrast',
    borderWidth: 0.5,
    marginBottom: 's12',
  },
};
