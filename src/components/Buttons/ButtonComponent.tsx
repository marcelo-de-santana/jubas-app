import {Icon} from '../Icons';
import {Text} from '../Text';
import {Button} from './Button';

interface ButtonComponentProps {
  type: 'add' | 'trash' | 'save' | 'save-flex';
  message?: string;
  onPress?: () => void;
}

export function ButtonComponent({
  type,
  message,
  onPress,
}: ButtonComponentProps) {
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
      <Button type="send" onPress={onPress}>
        <Text color="white" size="L">
          {message}
        </Text>
      </Button>
    );
  }
  if (type === 'save-flex') {
    return (
      <Button type="send-flex" onPress={onPress}>
        <Text color="white" size="L">
          {message}
        </Text>
      </Button>
    );
  }
}
