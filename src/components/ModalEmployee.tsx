import {
  Alert,
  Modal,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {theme, modal} from '@styles';
import {nameMask} from '@utils';
import {createBarber} from '@repositories';

type ModalParamsType = {
  modalParams: {
    visible: boolean;
    data: {
      name: string;
      password: string;
    };
  };
  setModalParams: React.Dispatch<
    React.SetStateAction<{
      visible: boolean;
      data: {
        name: string;
        password: string;
      };
    }>
  >;
};

export function ModalEmployee({modalParams, setModalParams}: ModalParamsType) {
  function closeModal() {
    setModalParams(prev => ({...prev, visible: false}));
  }

  function handleTextInput(key: string, value: string) {
    setModalParams(prev => ({
      ...prev,
      data: {
        ...prev.data,
        [key]: value,
      },
    }));
  }

  // function alterBarber() {
  //     Alert.alert('', 'Deseja alterar o nome do barbeiro?', [{
  //         text: 'Cancelar',
  //         style: 'cancel',
  //     }, {
  //         text: 'Confirmar',
  //         onPress: () => alterBarberName()
  //     }])
  //     //MÉTODO RESPONSÁVEL POR ALTERAR O NOME DO BARBEIRO
  //     async function alterBarberName() {
  //         const response = await fetch(`${env.host}/barber/update/`, {
  //             method: 'PUT',
  //             headers: {
  //                 'Content-Type': 'application/json'
  //             },
  //             body: JSON.stringify(modalParams.data)
  //         })
  //         const json = await response.json()
  //         Alert.alert('', json.message)
  //         refreshPage()
  //         closeModal()
  //     }
  // }

  // function disableBarber() {
  //     Alert.alert('', `Deseja ${modalParams.data.barberStatus ? 'desativar' : 'ativar'} o barbeiro?`, [{
  //         text: 'Cancelar',
  //         style: 'cancel',
  //     },
  //     {
  //         text: 'Confirmar',
  //         onPress: () => disableBarberStatus()
  //     }
  //     ])
  //     //MÉTODO RESPONSÁVEL POR ALTERAR O ESTADO DO CADASTRO DO BARBEIRO
  //     async function disableBarberStatus() {
  //         const response = await fetch(`${env.host}/user/register-status`, {
  //             method: 'PUT',
  //             headers: {
  //                 'Content-Type': 'application/json'
  //             },
  //             body: JSON.stringify({
  //                 barber_id: modalParams.data.barberId,
  //                 status: Number(!modalParams.data.barberStatus)
  //             })
  //         })
  //         const json = await response.json()
  //         Alert.alert('', json.message)
  //         refreshPage()
  //         closeModal()
  //     }
  // }

  // function deleteBarber() {
  //     Alert.alert('', 'Deseja EXCLUIR o barbeiro, o cadastro ainda ficará disponível na lista de usuários?', [{
  //         text: 'Cancelar',
  //         style: 'cancel',
  //     },
  //     {
  //         text: 'Confirmar',
  //         onPress: () => sendDeleteBarber()
  //     }])
  //     async function sendDeleteBarber() {
  //         const response = await fetch(`${env.host}/barber/delete`, {
  //             method: 'DELETE',
  //             headers: {
  //                 'Content-Type': 'application/json'
  //             },
  //             body: JSON.stringify(modalParams.data)
  //         })
  //         const json = await response.json()
  //         Alert.alert('', json.message)
  //         refreshPage()
  //         closeModal()
  //     }
  // }

  return (
    <Modal
      visible={modalParams.visible}
      animationType="fade"
      transparent={true}
      onRequestClose={() => closeModal()}>
      <View style={modal.container}>
        <Pressable style={modal.pressable} onPress={() => closeModal()} />
        <View style={modal.boxItems}>
          <View style={modal.boxForm}>
            <Text style={theme.textHeader}>Nome</Text>
            <TextInput
              style={modal.input}
              value={modalParams.data.name}
              onChangeText={text => handleTextInput('barberName', text)}
            />
            {/* <TouchableOpacity onPress={() => alterBarber()}
                            style={modal.button}>
                            <Text style={modal.textButton}>Alterar Nome</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => disableBarber()}
                            style={modal.whiteButton}>
                            <Text style={modal.blackTextButton}>{modalParams.data.barberStatus ? 'Desativar' : 'Ativar'} barbeiro</Text>
                        </TouchableOpacity> */}
          </View>
          {/* <TouchableOpacity onPress={() => deleteBarber()}
                        style={modal.redButton} >
                        <Text style={modal.textButton}>Remover permissão</Text>
                    </TouchableOpacity> */}
        </View>
      </View>
    </Modal>
  );
}

export function ModalRegisterEmployee({
  modalParams,
  setModalParams,
}: ModalParamsType) {
  function closeModal() {
    setModalParams(prev => ({...prev, visible: false}));
  }

  function handleTextInput(key: string, value: string) {
    setModalParams(prev => ({
      ...prev,
      data: {
        ...prev.data,
        [key]: value,
      },
    }));
  }

  async function registerBarber() {
    const {data} = modalParams;
    try {
      const response = await createBarber(data);
      Alert.alert('', response.data);
      closeModal();
    } catch (error) {
      Alert.alert('', 'Ocorreu um erro');
    }
  }

  return (
    <Modal
      visible={modalParams.visible}
      animationType="fade"
      transparent={false}>
      <View style={modal.container}>
        <Pressable style={modal.pressable} onPress={closeModal} />
        <View style={modal.boxItems}>
          <View style={modal.boxForm}>
            <Text style={theme.textHeader}>Nome</Text>

            <TextInput
              autoCapitalize="words"
              style={modal.input}
              value={modalParams.data.name}
              onChangeText={text => handleTextInput('name', nameMask(text))}
            />

            <Text style={theme.textHeader}>Senha</Text>
            <TextInput
              autoCapitalize="none"
              style={modal.input}
              secureTextEntry={true}
              maxLength={20}
              value={modalParams.data.password}
              onChangeText={text => handleTextInput('password', text)}
            />
            <TouchableOpacity style={modal.blueButton} onPress={registerBarber}>
              <Text style={modal.textButton}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
