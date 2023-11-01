import {View} from 'react-native';
import {Icon} from '../Icons';
import {Text} from '../Text';
import {Button} from './Button';

interface ButtonComponentProps {
  type:
    | 'add'
    | 'trash'
    | 'save'
    | 'save-flex'
    | 'close-window'
    | 'menu'
    | 'menu-tab';
  text?: string;
  onPress?: () => void;
}

export function ButtonComponent({type, text, onPress}: ButtonComponentProps) {
  if (type === 'add') {
    return (
      <Button type="square-right" onPress={onPress}>
        <Icon name="AddIcon" color="white" size={35} />
      </Button>
    );
  }
  if (type === 'trash') {
    return (
      <Button type="square-small" color="red" onPress={onPress}>
        <Icon name="TrashIcon" color="white" size={30} />
      </Button>
    );
  }
  if (type === 'save') {
    return (
      <Button type="square-inline" onPress={onPress}>
        <Text color="white" size="L">
          {text}
        </Text>
      </Button>
    );
  }
  if (type === 'save-flex') {
    return (
      <Button type="square-flex" onPress={onPress}>
        <Text color="white" size="L">
          {text}
        </Text>
      </Button>
    );
  }
  if (type === 'close-window')
    return (
      <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
        <Icon name="CloseIcon" color="steel-blue" size={30} onPress={onPress} />
      </View>
    );
  if (type === 'menu') {
    return (
      <Button type="menu-box" color="light-gray" onPress={onPress}>
        <Text color="midnight-blue">{text}</Text>
      </Button>
    );
  }
}
