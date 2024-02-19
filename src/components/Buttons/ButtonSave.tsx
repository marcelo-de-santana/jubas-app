import {Button, ButtonProps} from './Button';

export function ButtonSave({...props}: Readonly<ButtonProps>) {
  return (
    <Button
      type="inline"
      backgroundColor="steelBlue"
      style={{marginTop: 20}}
      title="Salvar"
      textProps={{color: 'white', size: 'L'}}
      {...props}
    />
  );
}
