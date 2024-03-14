import {ListSeparator} from '../List';
import {Text, TextProps} from '../Text/Text';
import {Box, BoxProps} from './Box';

interface BoxItemsProps extends BoxProps {
  children?: React.ReactNode;
  textProps?: TextProps;
  textFields: any[];
  isSeparator?: boolean;
  separatorProps?: BoxProps;
}

// use only if you are going to use the textFields
export function BoxItems({
  textProps,
  textFields,
  isSeparator = false,
  separatorProps,
  ...props
}: Readonly<BoxItemsProps>) {
  return (
    <>
      <Box
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="space-between"
        {...props}>
        {textFields?.map(item => (
          <Text key={item} {...textProps}>
            {item}
          </Text>
        ))}
      </Box>
      {isSeparator && <ListSeparator {...separatorProps} />}
    </>
  );
}
