import {ButtonAdd, ButtonProps} from '@components';

export function ButtonAddComponent({...props}: Readonly<ButtonProps>) {
  return (
    <ButtonAdd
      borderColor="secondaryContrast"
      backgroundColor="secondary"
      height={30}
      iconProps={{color: 'secondaryContrast', size: 20}}
      {...props}
    />
  );
}
