import {theme} from '@styles';
import {Text} from 'react-native';

export function TextHeader({title}: {title: string}) {
  return (
    <>
      <Text style={theme.textHeader}>{title}</Text>
    </>
  );
}
