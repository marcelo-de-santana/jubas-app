import {useTheme} from '@shopify/restyle';
import {Theme} from '@styles';

export function useAppTheme() {
  return useTheme<Theme>;
}
