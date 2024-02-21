import {createBox, BoxProps as RestyleBoxProps} from '@shopify/restyle';
import {Theme} from '@styles';

export const Box = createBox<Theme>();
export type BoxProps = RestyleBoxProps<Theme>;
