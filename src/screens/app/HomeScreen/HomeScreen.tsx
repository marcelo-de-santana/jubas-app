import {Box, Button, Screen} from '@components';
import {AppStackProps} from '@routes';
import {useAuthContext} from '@contexts';

export function HomeScreen({navigation}: Readonly<AppStackProps>) {
  const {user} = useAuthContext();

  const navigateToUnderConstruction = () => {
    navigation.navigate('UnderConstruction');
  };

  const navigateToScheduleStack = () => {
    navigation.navigate('ScheduleStack');
  };

  const navigateToBusinessManagementStack = () => {
    navigation.navigate('BusinessManagementStack');
  };

  const navigateToEmployeeStack = () => {
    navigation.navigate('EmployeeStack');
  };

  const navigateToUserStack = () => {
    navigation.navigate('UserStack');
  };

  return (
    <Screen paddingHorizontal="s10">
      <Box flexDirection="row" flexWrap="wrap" justifyContent="space-between">
        <Box />
        {/* <Button
          type="box"
          title="Ver agenda"
          onPress={navigateToScheduleStack}
          />
          <Button
          type="box"
          title="Minhas compras"
          onPress={navigateToUnderConstruction}
          />
          <Button
          type="box"
          title="Minha conta"
          onPress={navigateToUnderConstruction}
          />
          {user.permission !== 'ADMIN' && (
            <>
            <Button
            type="box"
            title="Gerenciar agenda"
            onPress={navigateToUnderConstruction}
            />
            <Button
            type="box"
            title="Meus funcionários"
            onPress={navigateToEmployeeStack}
            />
            <Button
            type="box"
            title="Gerenciar negócio"
            onPress={navigateToBusinessManagementStack}
            />
            <Button
            type="box"
            title="Gerenciar usuários"
            onPress={navigateToUserStack}
            />
            <Button
            type="box"
            title="Gerenciar pagamentos"
            onPress={navigateToUnderConstruction}
            />
            </>
          )} */}
      </Box>
      {/* <ButtonConfirm title="teste" /> */}
      <Button type="confirm" title="dd" disabled={true} />
    </Screen>
  );
}
