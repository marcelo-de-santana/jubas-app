import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Screen} from '@components';
import {PropsNativeStack} from '@routes';

function HomeScreen({navigation}: PropsNativeStack) {
  return (
    <Screen>
      <ScrollView>
        {/* {pageData.data?.map(item => (
          <View key={item.date}>
            <Text style={global.textHeader}>Dia: {item.date}</Text>
            <View style={global.blueBoxItems}>
              {item?.schedules.map(scheduleParams => {
                const {
                  schedule_id,
                  client_name,
                  barber_name,
                  name_service,
                  weekday_name,
                  time,
                  status,
                } = scheduleParams;
                return (
                  <View key={schedule_id}>
                    <View style={global.boxFlexRow}>
                      <Text style={global.whiteTextSmall}>{barber_name}</Text>
                      <TouchableOpacity
                        onPress={() => openModal(scheduleParams)}>
                        <Text style={global.whiteTextSmall}>Editar</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={global.greyBoxItems}>
                      <Text style={global.darkBlueTextSmall}>
                        Cliente: {client_name}
                      </Text>
                      <Text style={global.darkBlueTextSmall}>
                        Serviço: {name_service}
                      </Text>
                      <Text style={global.darkBlueTextSmall}>
                        Horário: {time}
                      </Text>
                      <Text style={global.darkBlueTextSmall}>
                        Dia da semana: {weekday_name}
                      </Text>
                      <Text style={global.darkBlueTextSmall}>
                        Status: {status}
                      </Text>
                    </View>
                  </View>
                );
              })}
            </View>
          </View>
        ))} */}
      </ScrollView>
    </Screen>
  );
}

export {HomeScreen};
