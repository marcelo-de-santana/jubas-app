import {Alert, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Screen} from '@components';
import {theme} from '@styles';
import {AppStackProps} from '@routes';

export function HomeScreen({navigation}: AppStackProps) {
  const {navigate} = navigation;
  return (
    <Screen>
      <View style={theme.boxFlexRow}>
        <TouchableOpacity
          style={theme.boxMenu}
          onPress={() => navigate('ServiceBookScreens')}>
          <Text style={theme.textMenu}>Ver agenda</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={theme.boxMenu}
          onPress={() => navigate('MyAccount')}>
          <Text style={theme.textMenu}>Minha conta</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={theme.boxMenu}
          onPress={() => navigate('ScheduleManagement')}>
          <Text style={theme.textMenu}>Gerenciar agenda</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={theme.boxMenu}
          onPress={() => navigate('ServiceCatalogScreens')}>
          <Text style={theme.textMenu}>Gerenciar catálogo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={theme.boxMenu}
          onPress={() => navigate('EmployeeScreen')}>
          <Text style={theme.textMenu}>Gerenciar barbeiros</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={theme.boxMenu}
          onPress={() => navigate('UsersScreens')}>
          <Text style={theme.textMenu}>Gerenciar usuários</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={theme.boxMenu}
          onPress={() => Alert.alert('', 'Módulo em construção')}>
          <Text style={theme.textMenu}>Gerenciar pagamentos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={theme.boxMenu}
          onPress={() => Alert.alert('', 'Módulo em construção')}>
          <Text style={theme.textMenu}>Minhas compras</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={theme.boxMenu}
          onPress={() => Alert.alert('', 'Módulo em construção')}>
          <Text style={theme.textMenu}>Promoções</Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
}
