import {theme} from '@styles';
import {Text} from 'react-native';
import {ListItemProps} from './ListTypes';

export function SimpleListItem({onPress, title}: ListItemProps) {
  return (
    <>
      <Text style={theme.darkBlueTextSmall}>{title}</Text>
    </>
  );
}
