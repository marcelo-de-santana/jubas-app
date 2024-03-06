import {Box, ButtonTwoOptions, Screen, Text} from '@components';
import {BusinessManagementStackProps} from '@routes';
import {mask} from '@utils';
import {Modal as RNModal} from 'react-native';

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
    <RNModal visible={isVisible} animationType="fade">
      <Screen flex={1} justifyContent="center">
        <Text variant="paragraphLarge" mb="s20">
          Deseja realmente excluir?
        </Text>
        <Box backgroundColor="primaryContrast" borderRadius="s6" padding="s10">
          <Text
            variant="paragraphMedium"
            color="primary"
            textAlign="justify"
            mb="s10">
            Descrição
          </Text>
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
        </Box>
        <ButtonTwoOptions
          cancelButtonProps={{
            loading: loading,
            borderColor: 'primaryContrast',
            title: 'Cancelar',
            textProps: {
              variant: 'paragraphMedium',
              color: 'primaryContrast',
            },
            onPress: onPressToCancel,
          }}
          confirmButtonProps={{
            loading: loading,
            backgroundColor: 'red',
            title: 'Confirmar',
            onPress: onPressToConfirm,
          }}
        />
      </Screen>
    </RNModal>
  );
}
