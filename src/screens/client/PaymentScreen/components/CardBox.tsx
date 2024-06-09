import {Box} from '@components';
import {ReactNode} from 'react';

export function CardBox({children}: {children?: ReactNode}) {
  return (
    <Box
      borderWidth={0.5}
      borderColor="primaryContrast"
      borderRadius="s6"
      g="s8"
      p="s10"
      mb="s10">
      {children}
    </Box>
  );
}
