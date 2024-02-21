import {ViewProps} from 'react-native';
import {Box} from './Box';

export function Separator(props: Readonly<ViewProps>) {
  return <Box borderWidth={1} borderColor="backgroundContrast" />;
}
