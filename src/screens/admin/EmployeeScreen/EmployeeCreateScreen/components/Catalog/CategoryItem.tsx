import {BoxItem} from '@components';
import {ReactNode} from 'react';

type CategoryItemProps = {
  label?: string;
  children?: ReactNode;
};

export function CategoryItem({label, children}: Readonly<CategoryItemProps>) {
  return (
    <BoxItem
      paddingHorizontal="s12"
      textProps={{textAlign: 'justify', paddingBottom: 's12'}}
      label={label}>
      {children}
    </BoxItem>
  );
}
