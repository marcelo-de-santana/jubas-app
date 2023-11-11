import {BoxItem, BoxItemProps} from './BoxItem';
import {Text, TextProps} from '../Text';
import {Separator} from './Separator';
import {themeRegistry} from '@styles';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

interface BoxComponetProps extends BoxItemProps {
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
}: BoxComponetProps) {
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
        {textFields?.map((item, index) => (
          <Text key={index} {...textProps}>
            {item}
          </Text>
        ))}
      </TouchableOpacity>
      <Separator />
    </BoxItem>
  );
}
