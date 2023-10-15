import {registryMenu} from '@styles';
import {TouchableOpacity, View} from 'react-native';
import {Text} from '../Texts';

type MenuProps = {
  menuOptions: {index?: number; title: string; onPress?: () => void}[];
  indexButtonSelected?: number;
};

export function MenuTab({menuOptions, indexButtonSelected}: MenuProps) {
  return (
    <View style={registryMenu.boxFlexRowMb}>
      {menuOptions ? (
        menuOptions.map((option, index) => {
          const tabStyle =
            indexButtonSelected === option.index
              ? 'tab-style-steel-blue'
              : 'tab-style-lavender-gray';
          const textColor =
            indexButtonSelected === option.index ? 'white' : 'midnight-blue';
          const disable = indexButtonSelected === option.index;

          return (
            <TouchableOpacity
              key={index}
              style={[registryMenu['box-tab'], registryMenu[tabStyle]]}
              onPress={option.onPress}
              disabled={disable}>
              <Text color={textColor}>{option.title}</Text>
            </TouchableOpacity>
          );
        })
      ) : (
        <></>
      )}
    </View>
  );
}
