import {Touchable, TouchableProps} from './Touchable';
import {Text, TextProps} from '../Texts';

interface TouchableItemProps extends TouchableProps {
  children?: React.ReactNode;
  textProps?: TextProps;
  textValues?: (string | React.JSX.Element)[];
}

export function TouchableItem({
  children,
  textProps,
  textValues,
  ...props
}: TouchableItemProps) {
  return (
    <Touchable type="line-items" {...props}>
      {textValues?.map((value, index) => (
        <Text key={index} size="S" {...textProps}>
          {value}
        </Text>
      ))}
      {children}
    </Touchable>
  );
}
