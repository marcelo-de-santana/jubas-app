import {useEffect} from 'react';
import {FlatList} from '@components';
import {profileUseCases} from '@domain';
import {Separator} from '../EmployeeCreateScreen/components/Separator';
import {ListHeaderComponent} from './components/ListHeaderComponent';
import {ProfileListItem} from './components/ProfileListItem';
import {EmployeeSelectProfileScreenProps} from '../EmployeeCreateScreen/components/types';

export function EmployeeSelectProfileScreen({
  selectedProfile,
  chooseProfile,
}: Readonly<EmployeeSelectProfileScreenProps>) {
  const {data, fetch, isLoading, isError} = profileUseCases.getAll();
  useEffect(() => {
    fetch(false);
  }, []);

  return (
    <FlatList
      data={data}
      loading={isLoading}
      error={isError}
      ListHeaderComponent={ListHeaderComponent}
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
