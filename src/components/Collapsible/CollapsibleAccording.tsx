import {useState} from 'react';
import {Text, TextProps} from '../Text/Text';
import {
  TouchableOpacity,
  TouchableOpacityProps,
} from '../TouchableOpacity/TouchableOpacity';
import {Collapsible, CollapsibleProps} from './Collapsible';

export interface CollapsibleAccordingProps extends CollapsibleProps {
  textProps?: TextProps;
  buttonProps?: TouchableOpacityProps;
  beginsClosed?: boolean;
  title?: string;
}

export function CollapsibleAccording({
  children,
  title,
  buttonProps,
  textProps,
  collapsed = true,
  ...collapsibleProps
}: Readonly<CollapsibleAccordingProps>) {
  const [isCollapsed, setIsCollapsed] = useState(collapsed);

  const handleCollapsible = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <TouchableOpacity {...buttonProps} onPress={handleCollapsible}>
        <Text {...textProps}>{title}</Text>
      </TouchableOpacity>
      <Collapsible collapsed={isCollapsed} {...collapsibleProps}>
        {children}
      </Collapsible>
    </>
  );
}
