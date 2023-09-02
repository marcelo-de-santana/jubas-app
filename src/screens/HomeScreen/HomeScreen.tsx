import {Alert, Text, TouchableOpacity, View} from 'react-native';
import {Screen} from '@components';
import {menu, theme} from '@styles';
import {AppStackProps} from '@routes';

export function HomeScreen({navigation}: AppStackProps) {
  const {navigate} = navigation;
  return (
    <Screen>
      <View style={theme.boxFlexRow}>
        <TouchableOpacity
          style={menu.boxMenu}
          onPress={() => navigate('ServiceBookScreens')}>
          <Text style={menu.textMenu}>Ver agenda</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={menu.boxMenu}
          onPress={() => navigate('MyAccount')}>
          <Text style={menu.textMenu}>Minha conta</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={menu.boxMenu}
          onPress={() => navigate('ScheduleManagement')}>
          <Text style={menu.textMenu}>Gerenciar agenda</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={menu.boxMenu}
          onPress={() => navigate('ServiceCatalogScreens')}>
          <Text style={menu.textMenu}>Gerenciar catálogo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={menu.boxMenu}
          onPress={() => navigate('EmployeeScreen')}>
          <Text style={menu.textMenu}>Gerenciar barbeiros</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={menu.boxMenu}
          onPress={() => navigate('UsersScreens')}>
          <Text style={menu.textMenu}>Gerenciar usuários</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={menu.boxMenu}
          onPress={() => Alert.alert('', 'Módulo em construção')}>
          <Text style={menu.textMenu}>Gerenciar pagamentos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={menu.boxMenu}
          onPress={() => Alert.alert('', 'Módulo em construção')}>
          <Text style={menu.textMenu}>Minhas compras</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={menu.boxMenu}
          onPress={() => Alert.alert('', 'Módulo em construção')}>
          <Text style={menu.textMenu}>Promoções</Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
}
