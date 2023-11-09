import {Button, Screen} from '@components';
import {AppStackProps} from '@routes';
import {useAuthContext} from '@contexts';
import {View} from 'react-native';
import {buttonStyle} from '@styles';

export function HomeScreen({navigation}: AppStackProps) {
  const {user} = useAuthContext();
  const {userPermission} = user;

  function navigateToUnderConstruction() {
    navigation.navigate('UnderConstruction');
  }

  function navigateToBusinessManagementStack() {
    navigation.navigate('BusinessManagementStack');
  }

  function navigateToEmployeeStack() {
    navigation.navigate('EmployeeStack');
  }

  function navigateToUserStack() {
    navigation.navigate('UserStack');
  }

  return (
    <Screen style={{padding: 10}}>
      <View style={buttonStyle['view-box']}>
        <Button
          type="box"
          text="Ver agenda"
          onPress={navigateToUnderConstruction}
        />
        <Button
          type="box"
          text="Minhas compras"
          onPress={navigateToBusinessManagementStack}
        />
        <Button
          type="box"
          text="Minha conta"
          onPress={navigateToUnderConstruction}
        />
        {userPermission.id !== 1 && (
          <>
            <Button
              type="box"
              text="Gerenciar agenda"
              onPress={navigateToUnderConstruction}
            />
            <Button
              type="box"
              text="Meus funcionários"
              onPress={navigateToEmployeeStack}
            />
            <Button
              type="box"
              text="Gerenciar negócio"
              onPress={navigateToBusinessManagementStack}
            />
            <Button
              type="box"
              text="Gerenciar usuários"
              onPress={navigateToUserStack}
            />
            <Button
              type="box"
              text="Gerenciar pagamentos"
              onPress={navigateToUnderConstruction}
            />
          </>
        )}
      </View>
    </Screen>
  );
}
