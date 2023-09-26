import {colorRegistry, registryMenu, themeRegistry} from '@styles';
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
    <View style={themeRegistry['box-flex-row']}>
      {menuOptions?.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[
            registryMenu['box'],
            {borderColor: colorRegistry['lavender-gray']},
          ]}
          onPress={() => goToScreen(option.routeName ?? 'UnderConstruction')}>
          <Text
            style={[
              {color: colorRegistry['midnight-blue'], textAlign: 'center'},
            ]}>
            {option.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
