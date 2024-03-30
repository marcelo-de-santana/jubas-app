import {Icon, IconProps} from '../Icons/Icon';
import {TouchableOpacity, TouchableOpacityProps} from '../TouchableOpacity';

interface ButtonAddProps extends TouchableOpacityProps {
  iconProps?: Omit<IconProps, 'name'>;
}

export function ButtonAdd({iconProps, ...props}: Readonly<ButtonAddProps>) {
  return (
    <TouchableOpacity
      alignItems="center"
      height={50}
      justifyContent="center"
      marginTop="s4"
      {...props}>
      <Icon name="AddIcon" size={30} color="primaryContrast" {...iconProps} />
    </TouchableOpacity>
  );
}
