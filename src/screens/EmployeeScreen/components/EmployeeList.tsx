import {EmptyListScreen, ListItem, LoadingScreen} from '@components';
import {BarberResponseDTO, getAllEmployeesRepo} from '@repositories';
import {useEffect, useState} from 'react';
import {FlatList} from 'react-native';

export function EmployeeList() {
  const [loading, setLoading] = useState(true);
  const [employee, setEmployee] = useState<BarberResponseDTO[]>([]);

  function changeLoading() {
    setLoading(!loading);
  }

  async function searchEmployees() {
    const response = await getAllEmployeesRepo();
    setEmployee(response);
    changeLoading();
  }

  useEffect(() => {
    searchEmployees();
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }
  return (
    <FlatList
      data={employee}
      keyExtractor={employeeData => employeeData.id}
      renderItem={({item}) => <ListItem title={item.name} />}
      ListEmptyComponent={
        <EmptyListScreen title="Lista de Funcionários Vazia" />
      }
    />
  );
}
