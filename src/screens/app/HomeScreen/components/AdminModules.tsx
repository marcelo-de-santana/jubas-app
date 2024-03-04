import {BoxMenu} from '@components';
import {AppStackProps} from '@routes';
//TODO colocar telas na Business Management do admin
export function AdminModules({
  navigation,
}: Readonly<Pick<AppStackProps, 'navigation'>>) {
  return (
    <>
      <BoxMenu
        title="Meus funcionários"
        onPress={() => navigation.navigate('EmployeeStack')}
      />
      
      <BoxMenu
        title="Gerenciar usuários"
        onPress={() => navigation.navigate('UserStack')}
      />
      <BoxMenu
        title="Gerenciar pagamentos"
        onPress={() => navigation.navigate('UnderConstruction')}
      />
    </>
  );
}
