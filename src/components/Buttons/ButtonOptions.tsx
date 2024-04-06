import {Collapsible, CollapsibleProps} from '../Collapsible';
import {Text, TextProps} from '../Text/Text';
import {TouchableOpacity, TouchableOpacityProps} from '../TouchableOpacity';

interface CollapsibleAccordingProps extends CollapsibleProps {
  beginsClosed?: boolean;
}

export interface ButtonOptionsProps extends TouchableOpacityProps {
  textProps?: TextProps;
  title?: string;
  isCollapsed: boolean;
  collapsibleProps?: CollapsibleAccordingProps;
}

export function ButtonOptions({
  children,
  title,
  textProps,
  isCollapsed,
  collapsibleProps,
  ...buttonProps
}: ButtonOptionsProps) {
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.7}
        backgroundColor="secondary"
        borderTopLeftRadius="s6"
        borderTopRightRadius="s6"
        height={50}
        justifyContent="center"
        style={isCollapsed ? borderRadiusButton : null}
        {...buttonProps}>
        <Text variant="paragraphSmall" color="primary" {...textProps}>
          {title}
        </Text>
      </TouchableOpacity>
      <Collapsible
        collapsed={isCollapsed}
        backgroundColor="secondary"
        borderBottomLeftRadius="s6"
        borderBottomRightRadius="s6"
        {...collapsibleProps}>
        {children}
      </Collapsible>
    </>
  );
}

const borderRadiusButton = {
  borderBottomLeftRadius: 6,
  borderBottomRightRadius: 6,
};
