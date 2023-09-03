import {menu, theme} from '@styles';
import {Text, TouchableOpacity, View} from 'react-native';

type MenuProps = {
  menuOptions: {title: string; routeName?: string}[];
  navigate: (routeName: string) => void;
};

export function Menu({menuOptions, navigate}: MenuProps) {
  function goToScreen(routeName: string) {
    navigate(routeName);
  }
  return (
    <View style={theme.boxFlexRow}>
      {menuOptions ? (
        menuOptions.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={menu.boxMenu}
            onPress={() => goToScreen(option.routeName ?? 'UnderConstruction')}>
            <Text style={menu.textMenuBlack}>{option.title}</Text>
          </TouchableOpacity>
        ))
      ) : (
        <></>
      )}
    </View>
  );
}
