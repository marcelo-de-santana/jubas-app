import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {global} from '../components/Styles';

export default function MainScreen({navigation}: any) {
  return (
    <View style={global.container}>
      <ScrollView>
        <View style={global.boxFlexRow}>
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
        </View>
      </ScrollView>
    </View>
  );
}
