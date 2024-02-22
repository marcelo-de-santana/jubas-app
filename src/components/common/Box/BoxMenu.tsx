import {Dimensions} from 'react-native';
import {Button, ButtonProps} from '../Buttons/Button';

const {width} = Dimensions.get('screen');

export function BoxMenu({...props}: Readonly<ButtonProps>) {
  return (
    <Button
      borderRadius="s10"
      justifyContent="center"
      margin="s4"
      height={100}
      textProps={{color: 'fontContrast', fontSize: 'L'}}
      {...props}
    />
  );
}
