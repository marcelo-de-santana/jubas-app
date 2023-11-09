import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {BusinessManagementParamList} from '../Stacks/BusinessManagementStack';

export type BusinessManagementScreenProps =
  NativeStackScreenProps<BusinessManagementParamList>;

export type CategoryUpdateScreenProps = NativeStackScreenProps<
  BusinessManagementParamList,
  'CategoryUpdateScreen'
>;
