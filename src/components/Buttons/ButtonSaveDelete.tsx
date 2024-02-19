import {colors, themeRegistry} from '@styles';
import {View, ViewStyle} from 'react-native';
import {ActivityIndicator} from '../ActivityIndicator/ActivityIndicator';
import {Button} from './Button';
import {Icon} from '../Icons/Icon';

interface ButtonSaveDeleteProps {
  deleteButtonPress: () => void;
  saveButtonPress: () => void;
  loading: boolean;
}

export function ButtonSaveDelete({
  deleteButtonPress,
  saveButtonPress,
  loading,
}: Readonly<ButtonSaveDeleteProps>) {
  const $deleteBoxStyle: ViewStyle = {
    alignItems: 'center',
    backgroundColor: colors['red'],
    borderRadius: 6,
    justifyContent: 'center',
    marginRight: 5,
    width: 40,
  };

  return (
    <View style={{marginTop: 20, ...themeRegistry.boxFlexRow}}>
      <View style={$deleteBoxStyle}>
        {loading ? (
          <ActivityIndicator color="white" size="small" />
        ) : (
          <Icon
            name="TrashIcon"
            color="white"
            size={30}
            onPress={deleteButtonPress}
          />
        )}
      </View>

      <Button
        type="flexible"
        backgroundColor="steelBlue"
        title="Salvar"
        textProps={{color: 'white', size: 'L'}}
        loading={loading}
        onPress={saveButtonPress}
      />
    </View>
  );
}
