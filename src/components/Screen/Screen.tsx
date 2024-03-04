import {useAppTheme} from '@hooks';
import {Box, BoxProps} from '../Box/Box';
import {ScreenViewContainer, ScrollViewContainer} from './ScreenContainers';

interface Props extends BoxProps {
  children?: React.ReactNode;
  scrollable?: boolean;
}

export function Screen({
  children,
  scrollable = false,
  px = 's20',
  py = 's10',
  ...props
}: Readonly<Props>) {
  const theme = useAppTheme();
  const Container = scrollable ? ScrollViewContainer : ScreenViewContainer;
  return (
    <Container backgroundColor={theme.colors.primary}>
      <Box px={px} py={py} {...props}>
        {children}
      </Box>
    </Container>
  );
}
