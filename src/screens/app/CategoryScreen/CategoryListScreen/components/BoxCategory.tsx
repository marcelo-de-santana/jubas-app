import {CollapsibleBox} from '@components';
import {CategoryResponse} from '@domain';
import {BusinessManagementStackProps} from '@routes';
import {ReactNode} from 'react';

type CollapsibleProps = {
  children: ReactNode;
  category: CategoryResponse;
} & Pick<BusinessManagementStackProps<'CategoryListScreen'>, 'navigation'>;

export function BoxCategory({
  children,
  navigation,
  category,
}: Readonly<CollapsibleProps>) {
  const navigateToCategoryUpdate = () =>
    navigation.navigate('CategoryUpdateScreen', {
      category,
    });

  return (
    <CollapsibleBox
      buttonProps={{
        onLongPress: navigateToCategoryUpdate,
      }}
      title={category.name}>
      {children}
    </CollapsibleBox>
  );
}
