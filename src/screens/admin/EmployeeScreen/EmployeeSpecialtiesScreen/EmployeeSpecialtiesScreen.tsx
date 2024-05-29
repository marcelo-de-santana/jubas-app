import {ButtonSuccess, FlatList, Screen, Text} from '@components';
import {SpecialtyResponse, useCategoryGetAll} from '@domain';
import {EmployeeStackProps} from '@routes';
import {useState} from 'react';
import {BoxAssignedSpecialties} from './components/BoxAssignedSpecialties';
import {BoxAvailableSpecialties} from './components/BoxAvailableSpecialties';

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
      <ButtonSuccess
        backgroundColor="secondaryContrast"
        style={{
          position: 'absolute',
          elevation: 0.7,
          bottom: 10,
          right: 20,
          left: 20,
        }}
        textProps={{variant: 'paragraphLarge', color: 'secondary'}}
        title="Salvar"
        onPress={() =>
          navigation.navigate('EmployeeSpecialtiesConfirmScreen', {
            employee,
            assignedSpecialties,
          })
        }
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
