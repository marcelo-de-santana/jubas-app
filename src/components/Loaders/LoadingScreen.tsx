import {useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {EmptyListScreen} from '../List';
import {loader} from '@styles';

export type LoadingScreenProps = {
  title?: string;
  searchData: () => Promise<void>;
};

export function LoadingScreen({title, searchData}: LoadingScreenProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      changeLoading();
    }, 2000);
  }, []);

  function changeLoading() {
    setIsLoading(true);
    searchData();
    setIsLoading(false);
  }

  if (isLoading) {
    return (
      <View style={loader.container}>
        <ActivityIndicator color="#161C26" size="large" />
        <Text style={loader.text}>Carregando...</Text>
      </View>
    );
  }
  if (title) {
    return <EmptyListScreen title={title} />;
  }
}
