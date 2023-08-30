import {useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

export function LoadingScreen() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color="#3c4659" size="large" />
      <Text style={styles.text}>Carregando...</Text>
    </View>
  );
}

export type LoadingScreenPageProps = {
  searchData: () => Promise<void>;
};

export function LoadingScreenPage({searchData}: LoadingScreenPageProps) {
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
      <View style={styles.container}>
        <ActivityIndicator color="#3c4659" size="large" />
        <Text style={styles.text}>Carregando...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 100,
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3c4659',
  },
});
