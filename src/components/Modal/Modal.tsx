import {
  IconProps,
  NavigationHeader,
  Screen,
  TouchableOpacity,
} from '@components';
import {Modal as RNModal} from 'react-native';
import {VisibilityResponse} from '@hooks';
import {ReactNode} from 'react';

type ModalProps = {
  children?: ReactNode;
  OpenModalComponent?: ReactNode;
  checkIconProps?: IconProps;
} & VisibilityResponse;

export function Modal({
  children,
  OpenModalComponent,
  checkIconProps,
  open,
  close,
  isVisible,
}: ModalProps) {
  return (
    <>
      <TouchableOpacity p="s12" onPress={open}>
        {OpenModalComponent}
      </TouchableOpacity>

      <RNModal visible={isVisible} animationType="fade" onRequestClose={close}>
        <NavigationHeader
          leftIconProps={{onPress: close}}
          rightIconProps={checkIconProps ?? {}}
        />
        <Screen flex={1}>{children}</Screen>
      </RNModal>
    </>
  );
}
