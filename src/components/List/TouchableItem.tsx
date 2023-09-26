import {
  TouchableComponent,
  TouchableComponentProps,
} from './TouchableComponent';
import {TextComponent, TextComponentProps} from '../Texts';

interface SimpleTouchableItemProps extends TouchableComponentProps {
  children?: React.ReactNode;
  textProps?: TextComponentProps;
  textValues?: (string | React.JSX.Element)[];
}

export function TouchableItem({
  children,
  textProps,
  textValues,
  ...props
}: SimpleTouchableItemProps) {
  return (
    <TouchableComponent type="line-items" {...props}>
      {textValues?.map((value, index) => (
        <TextComponent key={index} size="S" {...textProps}>
          {value}
        </TextComponent>
      ))}
      {children}
    </TouchableComponent>
  );
}
