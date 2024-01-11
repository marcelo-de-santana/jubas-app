import {Icon} from '../Icons';

interface AddButtonProps {
  status?: number | null;
  onPress?: () => void;
}

export function AddSteelBlue({onPress}: AddButtonProps) {
  return (
    <Icon
      name="AddIcon"
      type="floating"
      backgroundColor="steelBlue"
      color="white"
      size={35}
      onPress={onPress}
    />
  );
}
