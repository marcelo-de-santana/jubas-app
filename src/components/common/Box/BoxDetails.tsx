import {BoxItem, BoxItemProps} from './BoxItem';
import {Text, TextProps} from '../Text/Text';
import {ListSeparator} from '../List/ListSeparator';
import {
  TouchableOpacity,
  TouchableOpacityProps,
} from '../TouchableOpacity/TouchableOpacity';

interface BoxComponentProps extends BoxItemProps {
  textFields: string[];
  boxProps?: TouchableOpacityProps;
  textProps?: TextProps;
}

// use only if you are going to use the textFields
export function BoxDetails({
  textFields,
  boxProps,
  textProps,
  ...props
}: Readonly<BoxComponentProps>) {
  return (
    <BoxItem
      style={{
        justifyContent: 'center',
        paddingVertical: 5,
      }}
      {...props}>
      <TouchableOpacity
        flexDirection="row"
        flexWrap="wrap"
        padding="s10"
        justifyContent="space-between"
        {...boxProps}>
        {textFields?.map(item => (
          <Text key={item} {...textProps}>
            {item}
          </Text>
        ))}
      </TouchableOpacity>
      <ListSeparator />
    </BoxItem>
  );
}
