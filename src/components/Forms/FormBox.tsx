import {ReactNode} from 'react';
import {Keyboard, Pressable, PressableProps} from 'react-native';

interface FormBoxProps extends PressableProps {
  children: ReactNode;
}

/**
 * Componente responsável por formatar a tela e dar suporte na suspensão do
 * teclado quando o há um input em tela.
 */
export function FormBox({children, ...props}: Readonly<FormBoxProps>) {
  return (
    <Pressable onPress={props.onPress ?? Keyboard.dismiss} {...props}>
      {children}
    </Pressable>
  );
}
