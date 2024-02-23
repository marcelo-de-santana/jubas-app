import {Dimensions} from 'react-native';
import {Button, ButtonProps} from './Button';

interface ButtonToggleableProps extends ButtonProps {
  value: boolean;
}

const {width} = Dimensions.get('screen');

export function ButtonToggleable({
  value,
  ...props
}: Readonly<ButtonToggleableProps>) {
  const $buttonStyle = {
    backgroundColor: value ? 'lavenderGray' : 'lightGray',
    borderColor: value ? 'steelBlue' : 'lavenderGray',
    borderWidth: 1,
  };

  return (
    <Button
      justifyContent="center"
      borderRadius="s6"
      height={40}
      marginVertical="s4"
      width={width / 5}
      style={$buttonStyle}
      textProps={{color: value ? 'steelBlue' : 'lavenderGray'}}
      {...props}
    />
  );
}
