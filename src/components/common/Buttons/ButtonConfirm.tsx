import {Button, ButtonProps} from './Button';

export function ButtonConfirm({...props}: Readonly<ButtonProps>) {
  return (
    <Button
      type="inline"
      backgroundColor="steelBlue"
      style={{marginTop: 20, height: 50}}
      title="Salvar"
      textProps={{color: 'white', size: 'L'}}
      {...props}
    />
  );
}
