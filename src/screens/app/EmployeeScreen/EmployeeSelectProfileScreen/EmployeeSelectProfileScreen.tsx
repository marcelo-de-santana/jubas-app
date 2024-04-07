import {FlatList, ProfileListHeader} from '@components';
import {useProfileGetAll} from '@domain';
import {Separator} from '../EmployeeCreateScreen/components/Separator';
import {ProfileListItem} from './components/ProfileListItem';
import {EmployeeSelectProfileScreenProps} from '../EmployeeCreateScreen/components/types';

export function EmployeeSelectProfileScreen({
  selectedProfile,
  chooseProfile,
}: Readonly<EmployeeSelectProfileScreenProps>) {
  const {data, isLoading, isError} = useProfileGetAll();

  return (
    <FlatList
      data={data}
      loading={isLoading}
      error={isError}
      ListHeaderComponent={ProfileListHeader}
      renderItem={props => (
        <ProfileListItem
          {...props}
          selectedProfile={selectedProfile}
          chooseProfile={chooseProfile}
        />
      )}
      ItemSeparatorComponent={Separator}
    />
  );
}
