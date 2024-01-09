import {colors} from '@styles';
import {Button, ButtonProps} from './Button';

interface SectionButtonProps extends ButtonProps {
  value: boolean;
}

export function SectionButton({value, ...props}: SectionButtonProps) {
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
