import {useEffect, useState} from 'react';
import {Modal, StyleProp, View, ViewStyle} from 'react-native';
import {AlertName, alertStyle, colorRegistry} from '@styles';
import {Loader} from '../Loaders/Loader';
import {Text} from '../Text';

export interface ModalAlertProps {
  loading: boolean;
  status?: number | null;
  message?: string;
  color?: AlertName;
  successAction?: () => void;
  errorAction?: () => void;
}

export function ModalAlert({
  loading,
  status,
  message,
  color = 'light',
  successAction,
  errorAction,
}: ModalAlertProps) {
  const [isVisible, setVisible] = useState<boolean>(false);
  const $itemColor = alertStyle[color].text;
  const $boxColor = alertStyle[color].box;
  const $boxStyle = {
    padding: 20,
    borderRadius: 6,
    backgroundColor: colorRegistry[$boxColor],
  };

  useEffect(() => {
    handleVisibiliity();
  }, [loading, status]);

  function handleVisibiliity() {
    if (loading || status) {
      setVisible(true);
      if (status) {
        switch (status) {
          case 200:
            setVisible(false);
            if (successAction) successAction();
            break;
          case 201:
            setTimeout(() => {
              setVisible(false);
              if (successAction) successAction();
            }, 2000);
            break;
          default:
            setTimeout(() => {
              setVisible(false);
              if (errorAction) errorAction();
            }, 2000);
        }
      }
    }
  }

  let component = loading ? (
    <Loader color={$itemColor} />
  ) : (
    <Text color={$itemColor}>
      {message ?? 'Ops... Algo inesperado aconteceu.'}
    </Text>
  );

  return (
    <Modal visible={isVisible} transparent={true} animationType="fade">
      <View style={$boxContainerStyle}>
        <View style={$boxStyle}>{component}</View>
      </View>
    </Modal>
  );
}

const $boxContainerStyle: StyleProp<ViewStyle> = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: colorRegistry.midnightBlueTransparent,
};
