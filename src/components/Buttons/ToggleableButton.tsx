import {colors} from '@styles';
import {Button, ButtonProps} from './Button';

interface ToggleableButtonProps extends ButtonProps {
  value: boolean;
}

export function ToggleableButton({value, ...props}: ToggleableButtonProps) {
  const $buttonStyle = {
    backgroundColor: colors[value ? 'lavenderGray' : 'lightGray'],
    borderColor: colors[value ? 'steelBlue' : 'lavenderGray'],
    borderWidth: 1,
  };

  return (
    <Button
      type="inline-one-fifth-wide"
      style={$buttonStyle}
      textProps={{color: value ? 'steelBlue' : 'lavenderGray'}}
      {...props}
    />
  );
}
