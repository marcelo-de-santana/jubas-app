import {BoxItem, BoxItemProps} from '@components';

export function CategoryItem({label, children}: Readonly<BoxItemProps>) {
  return (
    <BoxItem
      paddingHorizontal="s12"
      textProps={{textAlign: 'justify', paddingBottom: 's12'}}
      label={label}>
      {children}
    </BoxItem>
  );
}
