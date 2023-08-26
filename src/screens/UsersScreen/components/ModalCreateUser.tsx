import {modal, theme} from '@styles';
import {useState} from 'react';
import {Modal, Pressable, Text, TouchableOpacity, View} from 'react-native';
import {FormModal} from './FormModal';

export function ModalCreateUser() {
  const [isVisible, setIsVisible] = useState(false);

  function handleModal() {
    setIsVisible(!isVisible);
  }

  return (
    <>
      <TouchableOpacity style={theme.blueButton} onPress={handleModal}>
        <Text style={theme.textButton}>Cadastrar</Text>
      </TouchableOpacity>
      <Modal animationType="fade" visible={isVisible} transparent={true}>
        <View style={modal.container}>
          <Pressable style={modal.pressable} onPress={handleModal} />
          <View style={modal.boxItems}>
            <View style={modal.boxForm}>
              <FormModal />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}
