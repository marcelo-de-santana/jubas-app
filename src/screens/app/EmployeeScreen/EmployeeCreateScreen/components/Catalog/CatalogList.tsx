import {FlatList} from '@components';
import {CatalogListItem} from './CatalogListItem';
import {useCategoryGetAll} from '@domain';
import {SelectedSpecialtiesState, HandleSpecialtiesFunctions} from '../types';

export type CatalogListProps = SelectedSpecialtiesState &
  HandleSpecialtiesFunctions;

export function CatalogList(listSpecialtiesProps: Readonly<CatalogListProps>) {
  const {data, isError, isLoading} = useCategoryGetAll();

  return (
    <FlatList
      data={data}
      renderItem={props => (
        <CatalogListItem {...props} {...listSpecialtiesProps} />
      )}
      isSeparator={false}
      loading={isLoading}
      error={isError}
    />
  );
}
