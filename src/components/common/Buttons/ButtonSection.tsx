import {colors} from '@styles';
import {Button, ButtonProps} from './Button';

interface ButtonSectionProps extends ButtonProps {
  value: boolean;
}

export function ButtonSection({value, ...props}: Readonly<ButtonSectionProps>) {
  const $buttonStyle = {
    backgroundColor: colors[value ? 'lavenderGray' : 'lightGray'],
    borderColor: colors[value ? 'steelBlue' : 'lavenderGray'],
    borderWidth: 1,
  };
  return (
    <Button
      type="section"
      style={$buttonStyle}
      textProps={{color: value ? 'steelBlue' : 'lavenderGray'}}
      {...props}
    />
  );
}
