import {theme} from '@styles';
import {useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {ModalEmployee, ModalRegisterEmployee} from '@components';

export function EmployeeScreen() {
  const [modalParams, setModalParams] = useState({
    visible: false,
    data: {
      name: '',
      password: '',
    },
  });
  const [modalRegisterParams, setModalRegisterParams] = useState({
    visible: false,
    data: {
      name: '',
      password: '',
    },
  });

  function openModalRegister() {
    setModalRegisterParams(prev => ({
      ...prev,
      visible: true,
    }));
  }

  return (
    <View style={theme.container}>
      <ModalEmployee
        modalParams={modalParams}
        setModalParams={setModalParams}
      />
      <ModalRegisterEmployee
        modalParams={modalRegisterParams}
        setModalParams={setModalRegisterParams}
      />
      <ScrollView>
        <Text style={theme.textHeaderMiddle}>Barbeiros</Text>
        {/* {barbersData.map((item, index) => (
          <View key={item.barber_id}>
            <View style={theme.blueBoxItems}>
              <View style={theme.boxFlexRow}>
                <Text style={theme.whiteTextMiddle}>{item.barber_name}</Text>
                <TouchableOpacity
                  onPress={() =>
                    openModal(
                      item.barber_id,
                      item.barber_name,
                      item.registration_status,
                    )
                  }>
                  <Text style={theme.whiteTextSmall}>Editar</Text>
                </TouchableOpacity>
              </View>
              <View style={theme.greyBox}>
                {item.times.map(timesItem => (
                  <Text
                    key={timesItem.weekday}
                    style={theme.darkBlueTextSmallCenter}>
                    {timesItem.weekday ?? 'Sem registro'}
                  </Text>
                ))}
                <Text style={theme.darkBlueTextSmallCenter}>
                  {item.registration_status ? 'Ativo' : 'Inativo'}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => changePage('EmployeeOverview', index)}>
                <Text style={theme.whiteTextSmallVeryCenter}>
                  Ver detalhes
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))} */}
      </ScrollView>
      <TouchableOpacity
        style={theme.blueButton}
        onPress={() => openModalRegister()}>
        <Text style={theme.textButton}>Cadastrar barbeiro</Text>
      </TouchableOpacity>
    </View>
  );
}
