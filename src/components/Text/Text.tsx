import {createText} from '@shopify/restyle';
import {Theme} from '@styles';
import {ComponentProps, ReactNode} from 'react';

const RestyleText = createText<Theme>();
type RestyleTextProps = ComponentProps<typeof RestyleText>;

export interface TextProps extends RestyleTextProps {
  children?: ReactNode | ReactNode[];
}

export function Text({children, ...props}: Readonly<TextProps>) {
  return (
    <RestyleText color="primaryContrast" textAlign="center" {...props}>
      {children}
    </RestyleText>
  );
}

export const textVariants = {
  defaults: {
    fontSize: 14,
  },
  paragraphExtraSmall: {
    fontSize: 10,
  },
  paragraphVerySmall: {
    fontSize: 12,
  },
  paragraphSmall: {
    fontSize: 14,
  },
  paragraphMedium: {
    fontSize: 16,
  },
  paragraphLarge: {
    fontSize: 18,
  },
  paragraphVeryLarge: {
    fontSize: 20,
  },
};