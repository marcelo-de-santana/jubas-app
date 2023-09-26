import {colorRegistry, fontSizeRegistry} from '@styles';
import {View} from 'react-native';
import {TextComponent} from '../Texts';

interface EmptyListComponentProps {
  title?: string;
  height?: number;
}

export function EmptyListComponent({
  title = 'Lista vazia',
  height = 50,
}: EmptyListComponentProps) {
  return (
    <View style={{flex: 1, justifyContent: 'center', height: height}}>
      <TextComponent
        style={[
          {
            fontSize: fontSizeRegistry['M'],
            color: colorRegistry['steel-blue'],
            textAlign: 'center',
          },
        ]}>
        {title}
      </TextComponent>
    </View>
  );
}
