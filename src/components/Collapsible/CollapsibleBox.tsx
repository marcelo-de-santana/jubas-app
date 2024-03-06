import {
  ButtonProps,
  CollapsibleAccording,
  CollapsibleAccordingProps,
  TextProps,
} from '@components';

export function CollapsibleBox({
  children,
  buttonProps,
  ...props
}: Readonly<CollapsibleAccordingProps>) {
  return (
    <CollapsibleAccording
      backgroundColor="primaryContrast"
      paddingHorizontal="s8"
      paddingBottom="s8"
      borderBottomLeftRadius="s6"
      borderBottomRightRadius="s6"
      buttonProps={{...$buttonProps, ...buttonProps}}
      textProps={$textProps}
      {...props}>
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
};

const $textProps: TextProps = {
  variant: 'paragraphMedium',
  color: 'primary',
  textAlign: 'center',
  verticalAlign: 'middle',
};
