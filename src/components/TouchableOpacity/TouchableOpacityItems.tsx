import {ListSeparator, ListSeparatorProps} from '../List';
import {Text, TextProps} from '../Text/Text';
import {
  TouchableOpacity,
  TouchableOpacityProps,
} from '../TouchableOpacity/TouchableOpacity';

interface TouchableOpacityItemsProps extends TouchableOpacityProps {
  children?: React.ReactNode;
  boxProps?: TouchableOpacityProps;
  textProps?: TextProps;
  textFields: any[];
  isSeparator?: boolean;
  separatorProps?: ListSeparatorProps;
}

// use only if you are going to use the textFields
export function TouchableOpacityItems({
  textProps,
  textFields,
  isSeparator = false,
  separatorProps,
  ...props
}: Readonly<TouchableOpacityItemsProps>) {
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
