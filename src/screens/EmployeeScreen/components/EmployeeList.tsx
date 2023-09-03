import {EmptyListScreen, ListItem, LoadingScreen, LoadingView} from '@components';
import {BarberResponseDTO, getAllEmployeesRepo} from '@repositories';
import {useEffect, useState} from 'react';
import {FlatList} from 'react-native';

export function EmployeeList() {
  const [employee, setEmployee] = useState<BarberResponseDTO[]>([]);

  async function searchData() {
    setEmployee(await getAllEmployeesRepo());
    
  }

  return (
    <FlatList
      data={employee}
      keyExtractor={employeeData => employeeData.id}
      renderItem={({item}) => <ListItem title={item.name} />}
      ListEmptyComponent={
        <LoadingScreen searchData={searchData} title="Lista de Funcionários Vazia" />
      }
    />
  );
}
