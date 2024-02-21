import {ThemeColors} from '@styles';
import {TouchableOpacityProps} from '../TouchableOpacity/TouchableOpacity';

export type ButtonPreset = 'confirm' | 'section';

type ButtonType = Record<
  ButtonPreset,
  {
    container: TouchableOpacityProps;
    content: {color: ThemeColors};
  }
>;

export const buttonPreset: ButtonType = {
  confirm: {
    container: {
      backgroundColor: 'primaryContrast',
      justifyContent: 'center',
      borderRadius: 6,
      height: 50,
      marginTop: 's24',
    },
    content: {
      color: "fontContrast",
    },
  },
  section: {
    container: {},
    content: {
      color: 'black',
    },
  },
};

export type ButtonName = keyof typeof buttonPreset;
