import {BoxItem, BoxItemProps} from './BoxItem';
import {Text, TextProps} from '../Text/Text';
import {Separator} from './Separator';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

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
        style={{
          ...themeRegistry['boxFlexRow'],
          padding: 10,
        }}
        {...boxProps}>
        {textFields?.map(item => (
          <Text key={item} {...textProps}>
            {item}
          </Text>
        ))}
      </TouchableOpacity>
      <Separator />
    </BoxItem>
  );
}
