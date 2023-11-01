import {LoadingScreen, Screen, TouchableItem} from '@components';
import {getAllCategories} from '@domain';
import {EmployeeServicesListScreenProps} from '@routes';
import {useEffect, useState} from 'react';
import {FlatList} from 'react-native';

export function EmployeeServicesListScreen({}: EmployeeServicesListScreenProps) {
  const [services, setSevices] = useState<{id: number; name: string}[]>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    searchData();
  }, []);

  async function searchData() {
    setLoading(true);
    setSevices(await getAllCategories());
    setLoading(false);
  }

  if (isLoading) return <LoadingScreen />;

  return (
    <Screen>
      <FlatList
        data={services}
        keyExtractor={item => item.name}
        renderItem={({item}) => (
          <TouchableItem textValues={[item.name]} onPress={() => {}} />
        )}
      />
    </Screen>
  );
}
