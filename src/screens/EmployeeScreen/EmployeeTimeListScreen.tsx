import {LoadingScreen, Screen} from '@components';
import {EmployeeTimeListScreenProps} from '@routes';
import {useEffect, useState} from 'react';
import {FlatList} from 'react-native';

export function EmployeeTimeListScreen({
  navigation,
  route,
}: EmployeeTimeListScreenProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // searchData();
  }, []);

  async function searchData() {
    setIsLoading(true);
    await getEmployeeWorkingHoursById(id);
    setIsLoading(false);
  }

  function renderItem() {
    return <></>;
  }

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Screen>
      <FlatList renderItem={renderItem} />
    </Screen>
  );
}
