import {Button, ButtonProps} from '../Buttons/Button';

export function BoxMenu({...props}: Readonly<ButtonProps>) {
  return (
    <Button
      borderRadius="s10"
      justifyContent="center"
      margin="s4"
      height={100}
      textProps={{variant: 'paragraphLarge'}}
      {...props}
    />
  );
}
