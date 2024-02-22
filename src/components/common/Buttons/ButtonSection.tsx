import {Button, ButtonProps} from './Button';

interface ButtonSectionProps extends ButtonProps {
  value: boolean;
}
/**
 * VERIFICAR ONDE É UTILIZADO
 * @param param0
 * @returns
 */
export function ButtonSection({value, ...props}: Readonly<ButtonSectionProps>) {
  const $buttonStyle = {
    backgroundColor: value ? 'lavenderGray' : 'lightGray',
    borderColor: value ? 'steelBlue' : 'lavenderGray',
    borderWidth: 1,
  };
  return (
    <Button
      alignItems="center"
      borderRadius="s6"
      justifyContent="center"
      padding="s4"
      marginVertical="s4"
      style={$buttonStyle}
      textProps={{color: value ? 'steelBlue' : 'lavenderGray'}}
      {...props}
    />
  );
}
