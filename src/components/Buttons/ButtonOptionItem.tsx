import {Text} from '../Text/Text';
import {TouchableOpacity, TouchableOpacityProps} from '../TouchableOpacity';

interface ButtonOptionItemProps extends TouchableOpacityProps {
  isSelected?: boolean;
  title?: string;
}

export function ButtonOptionItem({
  isSelected,
  title,
  ...props
}: ButtonOptionItemProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      backgroundColor={isSelected ? 'secondaryContrast' : 'secondary'}
      borderTopWidth={1}
      borderTopColor="secondaryContrast"
      height={50}
      justifyContent="center"
      {...props}>
      <Text
        variant="paragraphSmall"
        color={isSelected ? 'secondary' : 'secondaryContrast'}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
