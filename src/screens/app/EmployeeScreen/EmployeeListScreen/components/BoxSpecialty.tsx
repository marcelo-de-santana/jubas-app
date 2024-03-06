import {Box, Text, TouchableOpacityItem, ListSeparator} from '@components';
import {ButtonAddComponent} from './ButtonAdd';
import {SpecialtyResponse} from '@domain';
import {BusinessManagementStackProps} from '@routes';

type BoxSpecialtyProps = {
  specialties: SpecialtyResponse[];
} & Pick<BusinessManagementStackProps<'EmployeeListScreen'>, 'navigation'>;

export function BoxSpecialty({
  navigation,
  specialties,
}: Readonly<BoxSpecialtyProps>) {
  return (
    <>
      <Text color="secondaryContrast" textAlign="justify" mb="s4">
        Serviços
      </Text>
      <Box bg="primaryContrast" borderRadius="s6" padding="s10">
        {specialties.length !== 0 ? (
          specialties.map((specialty, index) => {
            const hasNext = specialties.length !== index + 1;

            return (
              <Box key={specialty.id}>
                <TouchableOpacityItem
                  padding="s10"
                  textProps={{color: 'primary'}}
                  label={specialty.name}
                  onLongPress={() =>
                    navigation.navigate('EmployeeUpdateSpecialtyScreen')
                  }
                />
                {hasNext && (
                  <ListSeparator variant="second" marginHorizontal="s4" />
                )}
              </Box>
            );
          })
        ) : (
          <Text padding="s10" color="primary">
            Nenhum Serviço atribuído.
          </Text>
        )}
        <ButtonAddComponent
          onPress={() => navigation.navigate('EmployeeAddSpecialtyScreen')}
        />
      </Box>
    </>
  );
}
