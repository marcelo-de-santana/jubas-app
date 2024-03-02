import {useEffect, useState} from 'react';
import {Modal, Pressable, View} from 'react-native';
import {Text} from '../Text/Text';
import {ThemeColors} from '@styles';
import {useAppTheme} from '@hooks';

export interface ModalStatusProps {
  status?: number | null;
  customStatus?: AlertStatusType;
  successAction?: () => void;
  errorAction?: () => void;
}

export function ModalStatus({
  status,
  customStatus,
  successAction,
  errorAction,
}: Readonly<ModalStatusProps>) {
  const {colors: themeColors} = useAppTheme();
  const alert = {...$alertStatus, ...customStatus};
  const color = alert[status ?? 505][0];
  const message = alert[status ?? 505][1];

  const $itemColor = $alertStyle[color].text;
  const $boxColor = $alertStyle[color].box;
  const $boxStyle = {
    padding: 20,
    borderRadius: 10,
    backgroundColor: themeColors[$boxColor],
  };
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    if (status) {
      return handleVisibility();
    }
  }, [status]);

  const closeModal = () => {
    setIsVisible(false);
    if (status === 200 || status === 201 || status == 204) {
      if (successAction) successAction();
    } else if (errorAction) errorAction();
  };

  const handleVisibility = () => {
    setIsVisible(true);
    setTimeout(closeModal, 2000);
  };

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
        onPress={() => setIsVisible(false)}>
        <View style={$boxStyle}>
          <Text
            variant="paragraphSmall"
            textAlign="justify"
            color={$itemColor}>
            {message ?? 'Ops... Algo inesperado aconteceu.'}
          </Text>
        </View>
      </Pressable>
    </Modal>
  );
}

const $alertStyle: AlertStyle = {
  NEUTRAL: {
    box: 'lightGray',
    text: 'steelBlue',
  },
  DANGER: {
    box: 'red',
    text: 'white',
  },
  SUCCESS: {
    box: 'lightGreen',
    text: 'white',
  },
};

const $alertStatus: AlertStatusType = {
  200: ['SUCCESS', 'Requisição bem-sucedida.'],
  201: ['SUCCESS', 'Criado com sucesso.'],
  204: ['SUCCESS', 'Atualizado com sucesso.'],
  401: ['DANGER', 'Credenciais inválidas.'],
  403: ['DANGER', 'Acesso negado.'],
  404: ['DANGER', 'Não encontrado.'],
  405: ['DANGER', 'Não permitido.'],
  413: ['DANGER', 'Requisição muito grande.'],
  500: ['NEUTRAL', 'Erro interno do servidor.'],
  503: ['NEUTRAL', 'Serviço indisponível.'],
  505: ['NEUTRAL', 'Erro inesperado.'],
};

export type AlertStatusType = Record<number, [AlertName, string]>;
type AlertName = 'NEUTRAL' | 'DANGER' | 'SUCCESS';
type AlertStyle = Record<AlertName, {box: ThemeColors; text: ThemeColors}>;
