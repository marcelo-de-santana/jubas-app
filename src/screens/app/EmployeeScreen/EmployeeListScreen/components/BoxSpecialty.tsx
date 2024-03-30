import {Text, ListSeparator, TouchableOpacity, BoxItem} from '@components';
import {EmployeeResponse} from '@domain';
import {BusinessManagementStackProps} from '@routes';

type BoxSpecialtyProps = {
  employee: EmployeeResponse;
} & Pick<BusinessManagementStackProps<'EmployeeListScreen'>, 'navigation'>;

export function BoxSpecialty({
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
          specialties.map((specialty, index) => {
            const hasNext = specialties.length !== index + 1;

            return (
              <BoxItem
                key={specialty.id}
                padding="s10"
                textProps={{color: 'primary'}}
                label={specialty.name}>
                {hasNext && (
                  <ListSeparator variant="second" marginHorizontal="s4" />
                )}
              </BoxItem>
            );
          })
        ) : (
          <Text padding="s10" color="primary">
            Nenhum Serviço atribuído.
          </Text>
        )}
      </TouchableOpacity>
    </>
  );
}
