import {modal} from '@styles';
import {Modal, Pressable, View} from 'react-native';

export type ModalScreenProps = {
  handleVisibility: () => void;
  visible: boolean;
  children: React.JSX.Element;
};

export function ModalScreen({
  handleVisibility,
  visible,
  children,
}: ModalScreenProps) {
  return (
    <Modal animationType="fade" visible={visible}>
      <View style={modal.container}>
        <Pressable style={modal.pressable} onPress={handleVisibility} />
        {children}
      </View>
    </Modal>
  );
}
