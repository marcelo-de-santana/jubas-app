import {useNavigation as RNuseNavigation} from '@react-navigation/native';

export function useNavigation() {
  const navigation = RNuseNavigation();

  function navigateBack() {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  }

  return {
    navigateBack,
    ...navigation,
  };
}
