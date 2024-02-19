import {EmptyList, Screen} from '@components';
import {employeeUseCases} from '@domain';
import {EmployeeScreenProps} from '@routes';
import {useEffect} from 'react';
import {EmployeeDetails} from './components/EmployeeDetails';
import {FirstEmployeeRegistration} from './components/FirstEmployeeRegistration';

export function EmployeeDetailsScreen({
  navigation,
  route,
}: Readonly<EmployeeScreenProps<'EmployeeDetailsScreen'>>) {
  const {data, fetch, status, isError, isLoading} = employeeUseCases.getById();

  const getEmployee = () => {
    fetch(route.params.profile.id);
  };

  useEffect(() => {
    navigation.addListener('focus', () => {
      getEmployee();
    });
  }, [navigation]);

  let body = (
    <EmptyList loading={isLoading} error={isError} refetch={getEmployee} />
  );

  if (status === 200 && data) {
    body = <EmployeeDetails navigation={navigation} employee={data} />;
  }

  if (status === 404) {
    body = <FirstEmployeeRegistration navigation={navigation} route={route} />;
  }

  return <Screen>{body}</Screen>;
}
