import {Box, ModalDelete, Text} from '@components';
import {BusinessManagementStackProps} from '@routes';
import {mask} from '@utils';

interface ModalProps
  extends Pick<BusinessManagementStackProps<'SpecialtyDeleteScreen'>, 'route'> {
  loading: boolean;
  isVisible: boolean;
  onPressToCancel: () => void;
  onPressToConfirm: () => void;
}

export function Modal({
  loading,
  isVisible,
  route,
  onPressToCancel,
  onPressToConfirm,
}: Readonly<ModalProps>) {
  const {specialty, category} = route.params;

  return (
    <ModalDelete
      loading={loading}
      isVisible={isVisible}
      onPressToCancel={onPressToCancel}
      onPressToConfirm={onPressToConfirm}>
      <Box backgroundColor="secondary" padding="s10" borderRadius="s6">
        <Text variant="paragraphMedium" color="primary" textAlign="justify">
          {'Categoria: ' + category.name}
        </Text>
        <Text variant="paragraphMedium" color="primary" textAlign="justify">
          {'Serviço: ' + specialty.name}
        </Text>
        <Text variant="paragraphMedium" color="primary" textAlign="justify">
          {'Preço: ' + mask.money(specialty.price)}
        </Text>
        <Text variant="paragraphMedium" color="primary" textAlign="justify">
          {'Duração: ' + specialty.timeDuration}
        </Text>
      </Box>
    </ModalDelete>
  );
}
