import {modal} from '@styles';
import {Modal, ModalProps, Pressable, StatusBar, View} from 'react-native';
import {StatusBarComponent} from '../StatusBar';

export type ModalScreenProps = ModalProps & {
  children?: React.JSX.Element;
  handleVisibility: () => void;
};

export function ModalScreen({
  children,
  handleVisibility,
  ...props
}: ModalScreenProps) {
  return (
    <Modal
      {...props}
      animationType={props?.animationType ?? 'fade'}
      transparent={props?.transparent ?? true}>
      <StatusBarComponent
        barStyle={'light-content'}
        backgroundColor={'#00000078'}
      />
      <View style={modal.container}>
        <Pressable style={modal.pressable} onPress={handleVisibility} />
        {children}
      </View>
    </Modal>
  );
}
