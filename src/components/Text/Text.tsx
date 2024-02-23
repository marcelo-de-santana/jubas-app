import {createText} from '@shopify/restyle';
import {Theme} from '@styles';
import {ComponentProps} from 'react';

export const RestyleText = createText<Theme>();
export type RestyleTextProps = ComponentProps<typeof RestyleText>;

export interface TextProps extends RestyleTextProps {
  children?: string;
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

// const fontSize = [xxs - 10, xs - 12, s - 14, m - 16, l - 18, xl - 20];
