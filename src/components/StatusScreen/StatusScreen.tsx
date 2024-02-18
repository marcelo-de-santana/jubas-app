import {useEffect, useState} from 'react';
import {Modal, Pressable, StyleProp, View, ViewStyle} from 'react-native';
import {alertStatus, AlertStatusType, alertStyle, colors} from '@styles';
import {Text} from '../Text/Text';

export interface StatusScreenProps {
  status?: number | null;
  customStatus?: AlertStatusType;
  successAction?: () => void;
  errorAction?: () => void;
}

export function StatusScreen({
  status,
  customStatus,
  successAction,
  errorAction,
}: Readonly<StatusScreenProps>) {
  const alert = {...alertStatus, ...customStatus};
  const color = alert[status ?? 505].type;
  const message = alert[status ?? 505].message;

  const $itemColor = alertStyle[color].text;
  const $boxColor = alertStyle[color].box;
  const $boxStyle = {
    padding: 20,
    borderRadius: 6,
    backgroundColor: colors[$boxColor],
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
      <Pressable style={$boxContainerStyle} onPress={() => setIsVisible(false)}>
        <View style={$boxStyle}>
          <Text color={$itemColor}>
            {message ?? 'Ops... Algo inesperado aconteceu.'}
          </Text>
        </View>
      </Pressable>
    </Modal>
  );
}

const $boxContainerStyle: StyleProp<ViewStyle> = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: colors.midnightBlueTransparent,
};
