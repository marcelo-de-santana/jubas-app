import {BoxItem, BoxItemProps, TextProps} from '@components';
import {
  TouchableOpacity,
  TouchableOpacityProps,
} from '../TouchableOpacity/TouchableOpacity';
import {Dimensions} from 'react-native';

interface BoxFourTimesProps extends TouchableOpacityProps {
  boxItemProps?: BoxItemProps;
  textProps?: TextProps;
  textValues?: string[];
}

export function BoxFourTimes({
  boxItemProps,
  textValues,
  textProps,
  ...props
}: Readonly<BoxFourTimesProps>) {
  const {width} = Dimensions.get('screen');
  return (
    <TouchableOpacity
      flexDirection="row"
      justifyContent="space-between"
      {...props}>
      {textValues?.map(item => (
        <BoxItem
          label={item}
          key={item}
          width={width * 0.2}
          justifyContent="center"
          textProps={{textAlign: 'center', ...textProps}}
          {...boxItemProps}
        />
      ))}
    </TouchableOpacity>
  );
}
