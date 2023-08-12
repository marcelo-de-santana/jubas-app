import {global} from '@styles';
import {Alert, Text, TouchableOpacity, View} from 'react-native';

function Menu(navigation: any) {
  return (
    <View style={global.boxFlexRow}>
      <ClientModules navigation={navigation} />
      <AdminModules navigation={navigation} />
    </View>
  );
}

function ClientModules(navigation: any) {
  return (
    <>
      <TouchableOpacity style={global.boxMenu}>
        <Text style={global.textMenu}>Ver agenda</Text>
      </TouchableOpacity>
      <TouchableOpacity style={global.boxMenu}>
        <Text style={global.textMenu}>Minha conta</Text>
      </TouchableOpacity>

      <TouchableOpacity style={global.boxMenu}>
        <Text style={global.textMenu}>Minhas compras</Text>
      </TouchableOpacity>
      <TouchableOpacity style={global.boxMenu}>
        <Text style={global.textMenu}>Promoções</Text>
      </TouchableOpacity>
    </>
  );
}

function AdminModules(navigation: any) {
  return (
    <>
      <TouchableOpacity
        style={global.boxMenu}
        onPress={() => navigation.navigate('ScheduleManagement')}>
        <Text style={global.textMenu}>Gerenciar agenda</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={global.boxMenu}
        onPress={() => navigation.navigate('ServiceCatalogScreens')}>
        <Text style={global.textMenu}>Gerenciar catálogo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={global.boxMenu}
        onPress={() => navigation.navigate('EmployeesScreens')}>
        <Text style={global.textMenu}>Gerenciar barbeiros</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={global.boxMenu}
        onPress={() => navigation.navigate('UsersScreens')}>
        <Text style={global.textMenu}>Gerenciar usuários</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={global.boxMenu}
        onPress={() => Alert.alert('Módulo em construção')}>
        <Text style={global.textMenu}>Gerenciar pagamentos</Text>
      </TouchableOpacity>
    </>
  );
}

export {Menu};
