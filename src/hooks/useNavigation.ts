import {useNavigation as RNuseNavigation} from '@react-navigation/native';

export function useNavigation() {
  const navigation = RNuseNavigation();

  const navigateBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return {
    ...navigation,
    goBack: navigateBack,
  };
}
