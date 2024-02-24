import {Text} from '../Text/Text';
import {
  TouchableOpacity,
  TouchableOpacityProps,
} from '../TouchableOpacity/TouchableOpacity';

export function BoxMenu({
  title,
  ...props
}: Readonly<TouchableOpacityProps & {title?: string}>) {
  return (
    <TouchableOpacity
      backgroundColor="primaryContrast"
      borderRadius="s10"
      justifyContent="center"
      margin="s4"
      height={100}
      {...props}>
      <Text variant="paragraphLarge" color="primary">
        {title}
      </Text>
    </TouchableOpacity>
  );
}
