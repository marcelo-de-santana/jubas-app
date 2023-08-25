import {LoadingScreen} from '@components';
import {BarberRequestDTO, getAllEmployeesRepo} from '@repositories';
import {theme} from '@styles';
import {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

export function EmployeeList() {
  const [loading, setLoading] = useState(true);
  const [employee, setEmployee] = useState<[BarberRequestDTO] | []>([]);

  useEffect(() => {
    getEmployees();
    setLoading(false);
  }, []);

  async function getEmployees() {
    const response = await getAllEmployeesRepo();
    setEmployee(response);
  }

  if (loading) {
    return <LoadingScreen />;
  }
  if (employee.length === 0) {
    return (
      <View style={{flex: 1 ,justifyContent:'center'}}>
        <Text style={theme.blackTextSmallCenter}>
          Lista de funcionários Vazia
        </Text>
      </View>
    );
  }
  return employee.map((item, index) => (
    <View key={index}>
      <TouchableOpacity style={theme.blueBoxItems} onPress={() => {}}>
        <View style={theme.boxFlexRow}>
          <Text style={theme.whiteTextMiddle}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  ));
}
