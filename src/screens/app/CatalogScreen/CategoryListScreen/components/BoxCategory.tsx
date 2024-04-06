import {CollapsibleBox} from '@components';
import {CategoryResponse} from '@domain';
import {CatalogStackProps} from '@routes';
import {ReactNode} from 'react';

type CollapsibleProps = {
  children: ReactNode;
  category: CategoryResponse;
} & Pick<CatalogStackProps<'CategoryListScreen'>, 'navigation'>;

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
