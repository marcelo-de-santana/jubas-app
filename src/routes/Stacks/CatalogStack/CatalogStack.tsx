import {CategoryResponse, SpecialtyResponse} from '@domain';
import {
  CategoryCreateScreen,
  CategoryDeleteScreen,
  CategoryListScreen,
  CategoryUpdateScreen,
  SpecialtyCreateScreen,
  SpecialtyDeleteScreen,
  SpecialtyUpdateScreen,
} from '@screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HeaderRight} from './components/HeaderRight';
import {defaultOptions} from '../../screenOptions';

export interface CategoryParams {
  category: CategoryResponse;
}

export interface SpecialtyParams {
  category: CategoryResponse;
  specialty: SpecialtyResponse;
}

export type CatalogStackParamList = {
  CategoryCreateScreen: undefined;
  CategoryDeleteScreen: CategoryParams;
  CategoryListScreen: undefined;
  CategoryUpdateScreen: CategoryParams;
  SpecialtyCreateScreen: CategoryParams;
  SpecialtyDeleteScreen: SpecialtyParams;
  SpecialtyUpdateScreen: SpecialtyParams;
};

export function CatalogStack() {
  const NativeStack = createNativeStackNavigator<CatalogStackParamList>();

  return (
    <NativeStack.Navigator
      screenOptions={defaultOptions}
      initialRouteName="CategoryListScreen">
      <NativeStack.Screen
        name="CategoryCreateScreen"
        component={CategoryCreateScreen}
        options={{headerTitle: 'Nova categoria'}}
      />
      <NativeStack.Screen
        name="CategoryDeleteScreen"
        component={CategoryDeleteScreen}
        options={{headerShown: false, animation: 'fade_from_bottom'}}
      />
      <NativeStack.Screen
        name="CategoryListScreen"
        component={CategoryListScreen}
        options={{
          headerTitle: 'Categorias',
          headerRight: HeaderRight,
        }}
      />
      <NativeStack.Screen
        name="CategoryUpdateScreen"
        component={CategoryUpdateScreen}
        options={{headerTitle: 'Atualizar categoria'}}
      />
      <NativeStack.Screen
        name="SpecialtyCreateScreen"
        component={SpecialtyCreateScreen}
        options={{headerTitle: 'Nova especialidade'}}
      />
      <NativeStack.Screen
        name="SpecialtyDeleteScreen"
        component={SpecialtyDeleteScreen}
        options={{
          headerShown: false,
          animation: 'fade_from_bottom',
        }}
      />
      <NativeStack.Screen
        name="SpecialtyUpdateScreen"
        component={SpecialtyUpdateScreen}
        options={{
          headerTitle: 'Atualizar especialidade',
        }}
      />
    </NativeStack.Navigator>
  );
}
