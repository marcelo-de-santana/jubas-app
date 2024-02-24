import {Button, ButtonProps} from './Button';

export function ButtonDangerOutline({...props}: Readonly<ButtonProps>) {
  return (
    <Button
      backgroundColor="primary"
      borderWidth={1}
      borderColor="red"
      borderRadius="s10"
      flex={1}
      p="s14"
      textProps={{variant: 'paragraphMedium', color: 'red'}}
      {...props}
    />
  );
}
