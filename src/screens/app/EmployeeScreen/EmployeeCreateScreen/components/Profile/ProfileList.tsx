import {FlatList, ProfileListHeader} from '@components';
import {EmployeeResponse, useProfileGetAll} from '@domain';
import {Separator} from '../Separator';
import {ProfileListItem} from './ProfileListItem';
import {SelectedProfileState, ChooseProfileFunction} from '../types';
import {useQueryClient} from '@tanstack/react-query';
import {QueryKeys} from '@hooks';

type ProfileListProps = SelectedProfileState & ChooseProfileFunction;

export function ProfileList({
  selectedProfile,
  chooseProfile,
}: Readonly<ProfileListProps>) {
  const {data, isError, isLoading} = getAvailableProfiles();

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

const getAvailableProfiles = () => {
  const {
    data: profiles,
    isLoading: profileIsLoading,
    isError: profileIsError,
  } = useProfileGetAll({withUser: true});

  const queryClient = useQueryClient();
  const employees = queryClient.getQueryData<EmployeeResponse[]>([
    QueryKeys.EmployeeGetAll,
  ]);

  const profilesWithBarberPermission = profiles?.filter(
    profile => profile.user?.permission === 'BARBEIRO',
  );

  const availableProfiles = profilesWithBarberPermission?.filter(profile =>
    employees?.every(employee => employee.id !== profile.id),
  );

  return {
    data: availableProfiles,
    isLoading: profileIsLoading,
    isError: profileIsError,
  };
};
