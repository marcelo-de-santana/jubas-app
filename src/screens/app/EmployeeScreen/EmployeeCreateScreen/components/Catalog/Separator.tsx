import {ListSeparator} from '@components';

export function Separator({
  borderColor = 'primaryContrast',
}: Readonly<{borderColor?: 'primaryContrast' | 'secondaryContrast'}>) {
  return (
    <ListSeparator
      borderColor={borderColor}
      borderWidth={0.5}
      marginVertical="s12"
    />
  );
}
