import {
  Box,
  BoxItem,
  FlatList,
  Modal,
  Text,
  TouchableOpacity,
} from '@components';
import {SpecialtyResponse, useEmployeeGetAvailableSpecialties} from '@domain';
import {useVisibility} from '@hooks';
import {AppointmentStackProps} from '@routes';
import {mask} from '@utils';
import {ListRenderItemInfo} from 'react-native';

type BoxSpecialtyProps = {
  selectedSpecialty?: SpecialtyResponse;
  handleSpecialty: (specialty: SpecialtyResponse) => void;
} & Pick<AppointmentStackProps<'AppointmentCreateScreen'>, 'route'>;

export function BoxSpecialty({
  selectedSpecialty,
  route,
  handleSpecialty,
}: BoxSpecialtyProps) {
  const {date, employee, time} = route.params;

  const {data, isLoading, isError} = useEmployeeGetAvailableSpecialties({
    employeeId: employee.id,
    date,
    time,
  });

  const modalVisibility = useVisibility();

  return (
    <>
      <BoxItem
        textProps={{variant: 'paragraphMedium', textAlign: 'justify'}}
        label="Descrição do serviço"
      />

      <Modal
        {...modalVisibility}
        OpenModalComponent={
          <OpenModalComponent selectedSpecialty={selectedSpecialty} />
        }>
        <FlatList
          data={data}
          loading={isLoading}
          error={isError}
          renderItem={prop => (
            <SpecialtyListItem
              {...prop}
              handleSpecialty={handleSpecialty}
              closeModal={modalVisibility.close}
            />
          )}
          listEmptyTitle="Nenhuma especialidade disponível, escolha outro horário."
          isSeparator={false}
        />
      </Modal>
    </>
  );
}

function OpenModalComponent({
  selectedSpecialty,
}: {
  selectedSpecialty?: SpecialtyResponse;
}) {
  if (selectedSpecialty) {
    return (
      <Box flexDirection="row" justifyContent="space-between" borderRadius="s6">
        <Text color="primaryContrast">{selectedSpecialty?.name}</Text>
        <Text color="primaryContrast">
          {mask.money(selectedSpecialty.price)}
        </Text>
        <Text color="primaryContrast">{selectedSpecialty?.timeDuration}</Text>
      </Box>
    );
  }

  return <Text>Selecionar especialidade</Text>;
}

type SpecialtyListItemProps = ListRenderItemInfo<SpecialtyResponse> & {
  handleSpecialty: (specialty: SpecialtyResponse) => void;
  closeModal: () => void;
};

function SpecialtyListItem({
  item: specialty,
  handleSpecialty,
  closeModal,
}: SpecialtyListItemProps) {
  const onChangeSpecialty = () => {
    handleSpecialty(specialty);
    closeModal();
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      p="s12"
      mb="s4"
      borderRadius="s6"
      bg="secondaryContrast"
      onPress={onChangeSpecialty}>
      <Text color="secondary" textAlign="justify">
        {specialty.name}
      </Text>
    </TouchableOpacity>
  );
}
