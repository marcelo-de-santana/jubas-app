import {Text, TextProps} from '../Text/Text';
import {Box, BoxProps} from './Box';

export interface BoxItemProps extends BoxProps {
  children?: React.ReactNode;
  label?: any;
  textProps?: TextProps;
}

export function BoxItem({
  children,
  label,
  textProps,
  ...props
}: Readonly<BoxItemProps>) {
  return (
    <Box {...props}>
      <Text variant="paragraphSmall" {...textProps}>
        {label}
      </Text>
      {children}
    </Box>
  );
}
