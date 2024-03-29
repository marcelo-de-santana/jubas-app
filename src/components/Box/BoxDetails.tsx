import {BoxItem, BoxItemProps} from './BoxItem';
import {Text, TextProps} from '../Text/Text';
import {ListSeparator} from '../List/ListSeparator';
import {
  TouchableOpacity,
  TouchableOpacityProps,
} from '../TouchableOpacity/TouchableOpacity';

interface BoxComponentProps extends BoxItemProps {
  textFields: any[];
  boxProps?: TouchableOpacityProps;
  textProps?: TextProps;
}

// use only if you are going to use the textFields
export function BoxDetails({
  boxProps,
  textProps,
  textFields,
  ...props
}: Readonly<BoxComponentProps>) {
  return (
    <BoxItem justifyContent="center" paddingVertical="s4" {...props}>
      <TouchableOpacity
        flexDirection="row"
        flexWrap="wrap"
        padding="s10"
        justifyContent="space-between"
        {...boxProps}>
        {textFields?.map(item => (
          <Text key={item} textAlign="justify" {...textProps}>
            {item}
          </Text>
        ))}
      </TouchableOpacity>
      <ListSeparator />
    </BoxItem>
  );
}
