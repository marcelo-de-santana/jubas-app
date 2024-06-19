import {NavigationContainer} from '@react-navigation/native';
import {AuthStack} from './Stacks/AuthStack/AuthStack';
import {ClientStack} from './Stacks/ClientStack/ClientStack';
import {useAuthStore} from '@services';
import {AdminStack} from './Stacks/AdminStack/AdminStack';

export function Routes() {
  return (
    <NavigationContainer
      linking={{
        prefixes: ['jubas://'],
        config: {
          screens: {
            PaymentSuccess: {
              path: 'payment-success/:preference_id',
            },
          },
        },
      }}>
      <Stacks />
    </NavigationContainer>
  );
}

function Stacks() {
  const {user} = useAuthStore();

  if (user?.permission === 'ADMIN') {
    return <AdminStack />;
  }
  if (user) {
    return <ClientStack />;
  }
  return <AuthStack />;
}
