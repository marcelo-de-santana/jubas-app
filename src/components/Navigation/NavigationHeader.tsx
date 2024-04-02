import {useNavigation} from '@react-navigation/native';
import {Box, BoxProps} from '../Box';
import {Icon, IconProps} from '../Icons';
import {Text, TextProps} from '../Text/Text';

type RightComponentType = {
  rightIconProps?: Partial<IconProps> | IconProps[];
};

export type NavigationHeaderProps = {
  headerTitleProps?: TitleComponentProps;
  leftIconProps?: Partial<IconProps>;
} & RightComponentType;

export function NavigationHeader({
  headerTitleProps,
  leftIconProps,
  rightIconProps,
  ...props
}: Readonly<NavigationHeaderProps & BoxProps>) {
  const {goBack} = useNavigation();

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      height={55.5}
      paddingHorizontal="s16"
      backgroundColor="primary"
      {...props}>
      <Box flex={1} justifyContent="flex-start">
        <Icon
          name="ArrowLeft"
          size={24}
          {...leftIconProps}
          onPress={leftIconProps?.onPress ?? goBack}
        />
      </Box>
      <Box justifyContent="center">
        {headerTitleProps?.title && <TitleComponent {...headerTitleProps} />}
      </Box>
      <Box flex={1} justifyContent="flex-end" flexDirection="row">
        <RightComponent rightIconProps={rightIconProps} />
      </Box>
    </Box>
  );
}

interface TitleComponentProps extends TextProps {
  title: string;
}

function TitleComponent({title, ...props}: Readonly<TitleComponentProps>) {
  return (
    // position="absolute"
    // left={horizontalPosition}
    // right={horizontalPosition}>
    <Text
      variant="paragraphVeryLarge"
      color="primaryContrast"
      textAlign="center"
      fontFamily="sans-serif-medium"
      {...props}>
      {title}
    </Text>
  );
}

function RightComponent({rightIconProps}: Readonly<RightComponentType>) {
  if (rightIconProps) {
    if (Array.isArray(rightIconProps)) {
      return rightIconProps.map(prop => (
        <Icon key={prop.name} size={30} {...prop} />
      ));
    } else if (rightIconProps.onPress) {
      return (
        <Icon
          size={30}
          {...rightIconProps}
          name={rightIconProps.name ?? 'AddIcon'}
        />
      );
    }
  }
}
