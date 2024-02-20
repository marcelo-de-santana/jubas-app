import {ButtonStyleName, ColorName} from '@styles';
import {Button, ButtonProps} from './Button';

interface ButtonTabProps extends ButtonProps {
  isPressed: boolean;
  title: string;
  onPress: () => void;
}

export function ButtonTab({isPressed, ...props}: Readonly<ButtonTabProps>) {
  const buttonType: ButtonStyleName = isPressed ? 'tab-blue' : 'tab-gray';
  const textColor: ColorName = isPressed ? 'white' : 'steelBlue';

  return (
    <Button
      type={buttonType}
      disabled={isPressed}
      textProps={{color: textColor}}
      {...props}
    />
  );
}
