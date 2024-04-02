import {
  IconProps,
  NavigationHeader,
  Screen,
  TouchableOpacity,
} from '@components';
import {Modal as RNModal} from 'react-native';
import {ModalVisibilityResponse} from '@hooks';
import {ReactNode} from 'react';

type ModalProps = {
  children?: ReactNode;
  OpenModalComponent?: ReactNode;
  checkIconProps?: IconProps;
} & ModalVisibilityResponse;

export function Modal({
  children,
  OpenModalComponent,
  checkIconProps,
  openModal,
  closeModal,
  isVisible,
}: Readonly<ModalProps>) {
  return (
    <>
      <TouchableOpacity padding="s12" onPress={openModal}>
        {OpenModalComponent}
      </TouchableOpacity>

      <RNModal
        visible={isVisible}
        animationType="fade"
        onRequestClose={closeModal}>
        <NavigationHeader
          leftIconProps={{onPress: closeModal}}
          rightIconProps={checkIconProps ?? {}}
        />
        <Screen flex={1}>{children}</Screen>
      </RNModal>
    </>
  );
}
