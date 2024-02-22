import {Icon} from '../Icons/Icon';

interface ButtonAddProps {
  status?: number | null;
  onPress?: () => void;
}

export function ButtonAdd({onPress}: Readonly<ButtonAddProps>) {
  return (
    <Icon
      name="AddIcon"
      // type="floating"
      // backgroundColor="steelBlue"
      color="white"
      size={35}
      onPress={onPress}
    />
  );
}
