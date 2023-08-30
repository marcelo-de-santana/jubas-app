import {modal} from '@styles';
import {Modal, Pressable, View} from 'react-native';

export type ModalScreenProps = {
  children?: React.JSX.Element;
  handleVisibility: () => void;
  transparent?: boolean;
  visible: boolean;
};

export function ModalScreen({
  children,
  handleVisibility,
  transparent,
  visible,
}: ModalScreenProps) {
  return (
    <Modal animationType="fade" visible={visible} transparent={transparent}>
      <View style={modal.container}>
        <Pressable style={modal.pressable} onPress={handleVisibility} />
        {children}
      </View>
    </Modal>
  );
}
