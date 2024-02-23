import {Button, ButtonProps} from './Button';

export function ButtonCentral({...props}: Readonly<ButtonProps>) {
  return (
    <Button
      backgroundColor="primaryContrast"
      justifyContent="center"
      borderRadius="s6"
      padding="s10"
      marginVertical="s4"
      textProps={{variant: 'paragraphMedium', color: 'primary'}}
      {...props}
    />
  );
}
