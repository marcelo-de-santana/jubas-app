import {menu, theme} from '@styles';
import {Text, TouchableOpacity, View} from 'react-native';

type MenuProps = {
  menuOptions: {index?: number; title: string; onPress?: () => void}[];
  indexButtonSelected?: number;
};

export function MenuTab({menuOptions, indexButtonSelected}: MenuProps) {
  return (
    <View style={menu.boxFlexRowMb}>
      {menuOptions ? (
        menuOptions.map((option, index) => {
          const boxColor =
            indexButtonSelected === option.index
              ? 'boxMenuTabBlue'
              : 'boxMenuTabGrey';
          const textColor =
            indexButtonSelected === option.index
              ? 'textMenuWhite'
              : 'textMenuBlack';
          const disable = indexButtonSelected === option.index;

          return (
            <TouchableOpacity
              key={index}
              style={menu[boxColor]}
              onPress={option.onPress}
              disabled={disable}>
              <Text style={menu[textColor]}>{option.title}</Text>
            </TouchableOpacity>
          );
        })
      ) : (
        <></>
      )}
    </View>
  );
}
