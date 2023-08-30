import {modal} from '@styles';
import {View} from 'react-native';

export function ModalItems({children}: {children: React.ReactNode}) {
  return (
    <View style={modal.boxItems}>
      <View style={modal.boxForm}>{children}</View>
    </View>
  );
}
