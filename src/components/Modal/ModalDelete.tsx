import {BoxItem, ButtonTwoOptions, Screen, Text} from '@components';
import {ReactNode} from 'react';
import {Modal as RNModal} from 'react-native';

interface ModalProps {
  loading: boolean;
  isVisible: boolean;
  onPressToCancel: () => void;
  onPressToConfirm: () => void;
  children: ReactNode;
}

export function ModalDelete({
  children,
  loading,
  isVisible,
  onPressToCancel,
  onPressToConfirm,
}: Readonly<ModalProps>) {
  return (
    <RNModal visible={isVisible} animationType="fade">
      <Screen flex={1} justifyContent="center">
        <Text variant="paragraphLarge" mb="s20">
          Deseja realmente excluir?
        </Text>
        <BoxItem
          backgroundColor="primaryContrast"
          borderRadius="s6"
          padding="s10"
          textProps={{
            variant: 'paragraphMedium',
            color: 'primary',
            textAlign: 'justify',
            mb: 's10',
          }}
          label="Descrição">
          {children}
        </BoxItem>
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
