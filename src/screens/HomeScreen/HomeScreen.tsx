import {ButtonComponent, Screen} from '@components';
import {AppStackProps} from '@routes';
import {useAuthContext} from '@contexts';
import {View} from 'react-native';
import {themeRegistry} from '@styles';

export function HomeScreen({navigation}: AppStackProps) {
  const {user} = useAuthContext();
  const {userPermission} = user;

  function ClientModules() {
    return (
      <>
        <ButtonComponent
          type="menu"
          text="Ver agenda"
          onPress={() => navigation.navigate('UnderConstruction')}
        />
        <ButtonComponent
          type="menu"
          text="Minhas compras"
          onPress={() => navigation.navigate('BusinessManagementStack')}
        />
        <ButtonComponent
          type="menu"
          text="Minha conta"
          onPress={() => navigation.navigate('UnderConstruction')}
        />
      </>
    );
  }

  function AdminModules() {
    return (
      <>
        <ButtonComponent
          type="menu"
          text="Gerenciar agenda"
          onPress={() => navigation.navigate('UnderConstruction')}
        />
        <ButtonComponent
          type="menu"
          text="Meus funcionários"
          onPress={() => navigation.navigate('EmployeeStack')}
        />
        <ButtonComponent
          type="menu"
          text="Gerenciar negócio"
          onPress={() => navigation.navigate('BusinessManagementStack')}
        />
        <ButtonComponent
          type="menu"
          text="Gerenciar usuários"
          onPress={() => navigation.navigate('UserStack')}
        />
        <ButtonComponent
          type="menu"
          text="Gerenciar pagamentos"
          onPress={() => navigation.navigate('UnderConstruction')}
        />
      </>
    );
  }

  return (
    <Screen>
      <View style={themeRegistry['box-flex-row']}>
        <ClientModules />
        {userPermission.id !== 1 && <AdminModules />}
      </View>
    </Screen>
  );
}
