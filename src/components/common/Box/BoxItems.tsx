import {ListSeparator} from '../List';
import {Text, TextProps} from '../Text/Text';
import {
  TouchableOpacity,
  TouchableOpacityProps,
} from '../TouchableOpacity/TouchableOpacity';
import {BoxProps} from './Box';

interface BoxItemsProps extends TouchableOpacityProps {
  children?: React.ReactNode;
  boxProps?: TouchableOpacityProps;
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
      <TouchableOpacity
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="space-between"
        {...props}>
        {textFields?.map(item => (
          <Text key={item} {...textProps}>
            {item}
          </Text>
        ))}
      </TouchableOpacity>
      {isSeparator && <ListSeparator {...separatorProps} />}
    </>
  );
}
