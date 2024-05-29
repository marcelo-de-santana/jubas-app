import {Box, Text} from '@components';

export function BoxHeader({title}: Readonly<{title: string}>) {
  return (
    <Box>
      <Text variant="paragraphMedium" textAlign="justify">
        {title}
      </Text>
    </Box>
  );
}
