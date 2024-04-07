import {
  Box,
  BoxItem,
  ButtonTwoOptions,
  ModalStatus,
  ModalStatusProps,
  Screen,
  Text,
} from '@components';
import {ReactNode} from 'react';

type BoxDeleteProps = {
  modalStatusProps?: ModalStatusProps;
  children: ReactNode;
  isLoading?: boolean;
  buttonProps?: ButtonTwoOptions;
};

export function BoxDelete({
  children,
  modalStatusProps,
  isLoading,
  buttonProps,
}: BoxDeleteProps) {
  return (
    <>
      <ModalStatus {...modalStatusProps} />
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
          <Box backgroundColor="secondary" padding="s10" borderRadius="s6">
            {children}
          </Box>
        </BoxItem>
        <ButtonTwoOptions
          cancelButtonProps={{
            borderColor: 'primaryContrast',
            title: 'Cancelar',
            textProps: {
              variant: 'paragraphMedium',
              color: 'primaryContrast',
            },
            loading: isLoading,
            ...buttonProps?.cancelButtonProps,
          }}
          confirmButtonProps={{
            backgroundColor: 'red',
            title: 'Confirmar',
            loading: isLoading,
            ...buttonProps?.confirmButtonProps,
          }}
        />
      </Screen>
    </>
  );
}
