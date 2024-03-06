import {Text, TextProps} from '../Text/Text';
import {Icon, IconName, IconProps} from './Icon';
import {ReactNode} from 'react';
import {TouchableOpacity, TouchableOpacityProps} from '../TouchableOpacity';

interface IconCheckBoxProps extends TouchableOpacityProps {
  label?: ReactNode | ReactNode[];
  textProps?: TextProps;
  iconProps?: Omit<IconProps, 'name'>;
  value?: boolean;
  onPress?: () => void;
}

/**
 *
 * @description Check box icon
 * @params {label?: string; value?: boolean}
 */

export function IconCheckBox({
  label,
  textProps,
  iconProps,
  value,
  ...props
}: Readonly<IconCheckBoxProps>) {
  const iconName: IconName = value ? 'CheckBoxChecked' : 'CheckBoxBlank';

  return (
    <TouchableOpacity
      alignItems="center"
      flexDirection="row"
      justifyContent="space-between"
      {...props}>
      <Text {...textProps}>{label}</Text>
      <Icon name={iconName} size={30} {...iconProps} />
    </TouchableOpacity>
  );
}
