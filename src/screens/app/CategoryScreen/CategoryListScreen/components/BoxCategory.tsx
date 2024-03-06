import {ButtonProps, CollapsibleAccording, TextProps} from '@components';
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
    <CollapsibleAccording
      backgroundColor="primaryContrast"
      paddingHorizontal="s8"
      paddingBottom="s8"
      borderBottomLeftRadius="s6"
      borderBottomRightRadius="s6"
      buttonProps={{
        ...$buttonProps,
        onLongPress: navigateToCategoryUpdate,
      }}
      textProps={$textProps}
      title={category.name}>
      {children}
    </CollapsibleAccording>
  );
}
const $buttonProps: ButtonProps = {
  backgroundColor: 'primaryContrast',
  alignItems: 'flex-start',
  justifyContent: 'center',
  paddingHorizontal: 's10',
  height: 50,
  borderTopLeftRadius: 's6',
  borderTopRightRadius: 's6',
  marginTop: 's4',
  onLongPress: () => console.warn(),
};

const $textProps: TextProps = {
  variant: 'paragraphMedium',
  color: 'primary',
  textAlign: 'center',
  verticalAlign: 'middle',
};
