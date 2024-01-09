import {ButtonStyleName, ColorName} from '@styles';
import {Button, ButtonProps} from './Button';

interface TabButtonProps extends ButtonProps {
  isPressed: boolean;
  title: string;
  onPress: () => void;
}

export function TabButton({isPressed, ...props}: TabButtonProps) {
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
