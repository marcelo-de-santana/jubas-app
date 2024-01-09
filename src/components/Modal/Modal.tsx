import {Pressable, View, ViewProps, ViewStyle} from 'react-native';
import {ColorName, colors} from '@styles';
import {Icon} from '../Icons';

interface ModalProps extends ViewProps {
  children?: React.ReactNode;
  color?: ColorName;
  onPress?: () => void;
}
export function Modal({
  children,
  color = 'lightGray',
  onPress,
  ...props
}: ModalProps) {
  const $modalStyle: ViewStyle = {
    backgroundColor: colors[color],
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 10,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  };
  return (
    <Pressable style={$modalStyle} {...props}>
      <View style={{alignItems: 'flex-end'}}>
        {onPress && (
          <Icon
            name={'CloseIcon'}
            backgroundColor="red"
            style={{borderRadius: 6}}
            color="lightGray"
            size={20}
            onPress={onPress}
          />
        )}
      </View>
      {children}
    </Pressable>
  );
}
