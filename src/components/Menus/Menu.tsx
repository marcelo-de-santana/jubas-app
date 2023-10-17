import {colorRegistry, registryMenu, themeRegistry} from '@styles';
import {TouchableOpacity, View} from 'react-native';
import {Text} from '../Text';

type MenuProps = {
  menuOptions: {title: string; route: () => void}[];
};

export function Menu({menuOptions}: MenuProps) {
  return (
    <View style={themeRegistry['box-flex-row']}>
      {menuOptions?.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[
            registryMenu['box'],
            {borderColor: colorRegistry['lavender-gray']},
          ]}
          onPress={option?.route}>
          <Text color="midnight-blue">{option?.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
