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
      borderRadius="s6"
      borderColor="primaryContrast"
      borderWidth={1}
      justifyContent="center"
      marginTop="s4"
      {...props}>
      <Icon name="AddIcon" size={30} color="primaryContrast" {...iconProps} />
    </TouchableOpacity>
  );
}
