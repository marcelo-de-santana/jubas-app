import {TouchableOpacityItems} from '@components';
import {SpecialtyResponse} from '@domain';
import {mask} from '@utils';

export function SpecialtyItem({
  specialty,
  isSeparator,
  onPress,
}: Readonly<{
  specialty: SpecialtyResponse;
  isSeparator: boolean;
  onPress: () => void;
}>) {
  return (
    <TouchableOpacityItems
      key={specialty.id}
      padding="s12"
      onPress={onPress}
      isSeparator={isSeparator}
      separatorProps={{
        backgroundColor: 'secondaryContrast',
        borderColor: 'secondaryContrast',
        borderWidth: 0.5,
        marginHorizontal: 's14',
      }}
      textProps={{color: 'secondaryContrast'}}
      textFields={[
        specialty.name,
        `${mask.money(specialty.price)}`,
        specialty.timeDuration,
      ]}
    />
  );
}
