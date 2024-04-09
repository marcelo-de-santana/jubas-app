import {
  Box,
  BoxProps,
  ButtonTwoOptions,
  ModalStatus,
  ModalStatusProps,
  Screen,
  Text,
} from '@components';
import {ReactNode} from 'react';

type BoxConfirmProps = {
  modalStatusProps?: ModalStatusProps;
  children: ReactNode;
  isLoading?: boolean;
  buttonProps?: ButtonTwoOptions;
  title?: string;
};

export function BoxConfirm({
  children,
  modalStatusProps,
  isLoading,
  buttonProps,
  title = 'Deseja prosseguir?',
}: BoxConfirmProps) {
  return (
    <>
      <ModalStatus {...modalStatusProps} />

      <Screen flex={1} justifyContent="center">
        <Text variant="paragraphVeryLarge" marginBottom="s20">
          {title}
        </Text>
        {children}
        <ButtonTwoOptions
          cancelButtonProps={{
            borderColor: 'primaryContrast',
            textProps: {variant: 'paragraphMedium', color: 'primaryContrast'},
            title: 'Voltar',
            loading: isLoading,
            ...buttonProps?.cancelButtonProps,
          }}
          confirmButtonProps={{
            title: 'Confirmar',
            loading: isLoading,
            ...buttonProps?.confirmButtonProps,
          }}
        />
      </Screen>
    </>
  );
}

export function BoxConfirmHeader({
  children,
  ...props
}: BoxProps & {children?: ReactNode}) {
  return (
    <Box backgroundColor="secondary" padding="s10" borderRadius="s6" {...props}>
      {children}
    </Box>
  );
}
