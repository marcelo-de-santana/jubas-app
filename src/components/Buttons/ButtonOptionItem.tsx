import {ThemeColors} from '@styles';
import {Text} from '../Text/Text';
import {TouchableOpacity, TouchableOpacityProps} from '../TouchableOpacity';

interface ButtonOptionItemProps extends TouchableOpacityProps {
  isSelected?: boolean;
  title?: string;
  selectedColor?: ThemeColors;
  unselectedColor?: ThemeColors;
}

export function ButtonOptionItem({
  isSelected,
  title,
  selectedColor = 'secondary',
  unselectedColor = 'secondaryContrast',
  ...props
}: ButtonOptionItemProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      backgroundColor={isSelected ? selectedColor : unselectedColor}
      borderTopWidth={1}
      borderTopColor={isSelected ? selectedColor : unselectedColor}
      height={50}
      justifyContent="center"
      {...props}>
      <Text
        variant="paragraphSmall"
        color={isSelected ? unselectedColor : selectedColor}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
