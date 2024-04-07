import {BoxItem} from '../Box';
import {TextProps} from '../Text/Text';

export function ProfileItems({
  textValues,
  textProps,
}: Readonly<{textValues: string[]; textProps?: TextProps}>) {
  return (
    <>
      <BoxItem
        width="40%"
        textProps={{
          color: 'primaryContrast',
          textAlign: 'justify',
          ...textProps,
        }}
        label={textValues[0]}
      />

      <BoxItem
        width="40%"
        textProps={{
          color: 'primaryContrast',
          textAlign: 'center',
          ...textProps,
        }}
        label={textValues[1]}
      />

      <BoxItem
        width="20%"
        textProps={{
          color: 'primaryContrast',
          textAlign: 'center',
          ...textProps,
        }}
        label={textValues[2]}
      />
    </>
  );
}
