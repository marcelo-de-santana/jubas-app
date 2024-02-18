import {Icon, Text} from '@components';
import {EmployeeScreenProps} from '@routes';
import {View} from 'react-native';

export function FirstEmployeeRegistration({
  navigation,
  route,
}: Readonly<EmployeeScreenProps<'EmployeeDetailsScreen'>>) {
  const navigateToCreateScreen = () => {
    navigation.navigate('EmployeeCreateScreen', {
      ...route.params,
    });
  };

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text size="M" align="center">
        Ops... O funcionário ainda não foi cadastrado. Deseja registrá-lo agora?
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          paddingVertical: 40,
        }}>
        <Icon
          name="CloseIcon"
          type="inline-one-fifth-wide"
          color="lightGray"
          backgroundColor="red"
          style={{alignItems: 'center'}}
          onPress={navigation.goBack}
        />
        <Icon
          name="CheckIcon"
          type="inline-one-fifth-wide"
          color="lightGray"
          backgroundColor="lightGreen"
          style={{alignItems: 'center'}}
          onPress={navigateToCreateScreen}
        />
      </View>
    </View>
  );
}
