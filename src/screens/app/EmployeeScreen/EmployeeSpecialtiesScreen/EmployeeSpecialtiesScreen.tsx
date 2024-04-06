import {FlatList, Screen, Text} from '@components';
import {SpecialtyResponse, useCategoryGetAll} from '@domain';
import {EmployeeStackProps} from '@routes';
import {useState} from 'react';
import {BoxAssignedSpecialties} from './components/BoxAssignedSpecialties';
import {BoxAvailableSpecialties} from './components/BoxAvailableSpecialties';
import {ModalConfirmSend} from './components/ModalConfirmSend';

export function EmployeeSpecialtiesScreen({
  navigation,
  route,
}: Readonly<EmployeeStackProps<'EmployeeSpecialtiesScreen'>>) {
  const {employee} = route.params;

  const {data, isLoading} = useCategoryGetAll();

  const [assignedSpecialties, setAssignedSpecialties] = useState(
    employee.specialties,
  );

  const addSpecialty = (specialty: SpecialtyResponse) => {
    setAssignedSpecialties(prevSpecialties => [...prevSpecialties, specialty]);
  };

  const removeSpecialty = (specialty: SpecialtyResponse) => {
    setAssignedSpecialties(prevSpecialties =>
      prevSpecialties.filter(
        assignedSpecialty => assignedSpecialty.id !== specialty.id,
      ),
    );
  };

  return (
    <Screen flex={1}>
      <FlatList
        data={data}
        isSeparator={false}
        loading={isLoading}
        ListHeaderComponent={HeaderComponent}
        renderItem={props => {
          return (
            <BoxAvailableSpecialties
              {...props}
              assignedSpecialties={assignedSpecialties}
              addSpecialty={addSpecialty}
            />
          );
        }}
        ListFooterComponent={
          <BoxAssignedSpecialties
            specialties={assignedSpecialties}
            removeSpecialty={removeSpecialty}
          />
        }
      />
      <ModalConfirmSend
        employee={employee}
        assignedSpecialties={assignedSpecialties}
        navigation={navigation}
      />
    </Screen>
  );
}

function HeaderComponent() {
  return (
    <Text variant="paragraphLarge" textAlign="justify">
      Disponíveis
    </Text>
  );
}
