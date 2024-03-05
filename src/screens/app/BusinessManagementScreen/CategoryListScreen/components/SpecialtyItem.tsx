import {TouchableOpacityItems} from '@components';
import {SpecialtyResponse} from '@domain';
import {mask} from '@utils';

export function SpecialtyItem({
  specialty,
  isSeparator,
  onLongPress,
}: Readonly<{
  specialty: SpecialtyResponse;
  isSeparator: boolean;
  onLongPress: () => void;
}>) {
  return (
    <TouchableOpacityItems
      key={specialty.id}
      padding="s12"
      onLongPress={onLongPress}
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
