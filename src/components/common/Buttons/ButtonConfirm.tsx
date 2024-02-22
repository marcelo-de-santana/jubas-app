import {Button, ButtonProps} from './Button';

export function ButtonConfirm({...props}: Readonly<ButtonProps>) {
  return (
    <Button
      height={50}
      justifyContent="center"
      borderRadius="s6"
      marginVertical="s4"
      marginTop="s20"
      textProps={{variant: 'paragraphLarge', color: 'fontContrast'}}
      {...props}
    />
  );
}
