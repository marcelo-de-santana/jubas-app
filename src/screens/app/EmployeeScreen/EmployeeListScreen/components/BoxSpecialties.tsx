import {Text, ListSeparator, TouchableOpacity, BoxItem} from '@components';
import {EmployeeResponse, SpecialtyResponse} from '@domain';
import {EmployeeListScreenNavigation} from '../EmployeeListScreen';

type BoxSpecialtyProps = {
  employee: EmployeeResponse;
} & EmployeeListScreenNavigation;

export function BoxSpecialties({
  navigation,
  employee,
}: Readonly<BoxSpecialtyProps>) {
  const {specialties} = employee;
  return (
    <>
      <Text color="secondaryContrast" textAlign="justify" mb="s4">
        Serviços
      </Text>
      <TouchableOpacity
        bg="primaryContrast"
        borderRadius="s6"
        padding="s10"
        onPress={() =>
          navigation.navigate('EmployeeSpecialtiesScreen', {
            employee,
          })
        }>
        {specialties.length !== 0 ? (
          <SpecialtyList specialties={specialties} />
        ) : (
          <Text padding="s10" color="primary">
            Nenhum Serviço atribuído.
          </Text>
        )}
      </TouchableOpacity>
    </>
  );
}

function SpecialtyList({
  specialties,
}: Readonly<{specialties: SpecialtyResponse[]}>) {
  return specialties.map((specialty, index) => (
    <SpecialtyListItem
      key={specialty.id}
      specialty={specialty}
      hasNext={specialties.length !== index + 1}
    />
  ));
}

function SpecialtyListItem({
  specialty,
  hasNext,
}: Readonly<{specialty: SpecialtyResponse; hasNext: boolean}>) {
  return (
    <>
      <BoxItem
        textProps={{color: 'primary', padding: 's10'}}
        label={specialty.name}
      />
      {hasNext && (
        <ListSeparator
          variant="first"
          backgroundColor="primary"
          marginHorizontal="s4"
          marginVertical="s10"
        />
      )}
    </>
  );
}
