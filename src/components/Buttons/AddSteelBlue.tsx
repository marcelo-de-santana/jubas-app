import {Icon} from '../Icons/Icon';

interface AddButtonProps {
  status?: number | null;
  onPress?: () => void;
}

export function AddSteelBlue({onPress}: Readonly<AddButtonProps>) {
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
