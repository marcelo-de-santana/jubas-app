import {Button, ButtonProps} from './Button';

export function ButtonSuccess({...props}: Readonly<ButtonProps>) {
  return (
    <Button
      backgroundColor="lightGreen"
      borderRadius="s10"
      p="s14"
      textProps={{variant: 'paragraphMedium', color: 'white'}}
      {...props}
    />
  );
}
