import {BoxItem, BoxItemProps} from '../Box';

export function ModalItem({children, ...props}: BoxItemProps) {
  return (
    <BoxItem
      backgroundColor="primaryContrast"
      borderRadius="s6"
      padding="s10"
      textProps={{
        variant: 'paragraphMedium',
        color: 'primary',
        textAlign: 'justify',
        mb: 's10',
      }}
      label="Descrição"
      {...props}>
      {children}
    </BoxItem>
  );
}
