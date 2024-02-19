import {colors} from '@styles';
import {Button, ButtonProps} from './Button';

interface ButtonToggleableProps extends ButtonProps {
  value: boolean;
}

export function ButtonToggleable({
  value,
  ...props
}: Readonly<ButtonToggleableProps>) {
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
