import {useEffect, useState} from 'react';
import {Modal, Pressable} from 'react-native';
import {Text} from '../Text/Text';
import {useAppTheme} from '@hooks';
import {ThemeColors} from '@styles';
import {Box} from '../Box';

export interface ModalStatusProps {
  isSuccess?: boolean;
  isError?: boolean | null;
  successAction?: () => void;
  errorAction?: () => void;
  customMessage?: AlertMessageType;
}

type StatusType = 'success' | 'error';

export type AlertMessageType = Partial<Record<StatusType, string>>;
type AlertStyleType = Record<StatusType, {box: ThemeColors; text: ThemeColors}>;

export function ModalStatus({
  isSuccess,
  isError,
  successAction,
  errorAction,
  customMessage,
}: ModalStatusProps) {
  const {colors: themeColors} = useAppTheme();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleCloseModal = () => {
    setIsVisible(false);
    if (isSuccess && successAction) successAction();
    else if (isError && errorAction) errorAction();
  };

  useEffect(() => {
    if (isSuccess || isError) {
      setIsVisible(true);

      setTimeout(() => {
        handleCloseModal();
      }, MODAL_TIMEOUT);
    }
  }, [isSuccess, isError]);

  const styleKey = isSuccess ? 'success' : 'error';

  const {box: boxColor, text: textColor} = ALERT_STYLE[styleKey];
  const message = {...ALERT_MESSAGE, ...customMessage};

  return (
    <Modal visible={isVisible} transparent={true} animationType="fade">
      <Pressable
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: themeColors.primary,
          opacity: 0.8,
        }}
        onPress={handleCloseModal}>
        <Box padding="s20" borderRadius="s10" backgroundColor={boxColor}>
          <Text variant="paragraphSmall" textAlign="justify" color={textColor}>
            {message[styleKey] ?? 'Ops... Algo inesperado aconteceu.'}
          </Text>
        </Box>
      </Pressable>
    </Modal>
  );
}

const ALERT_MESSAGE: AlertMessageType = {
  success: 'Requisição bem-sucedida.',
  error: 'Erro inesperado.',
};

const ALERT_STYLE: AlertStyleType = {
  success: {box: 'lightGreen', text: 'white'},
  error: {box: 'red', text: 'white'},
};

const MODAL_TIMEOUT = 2000;
