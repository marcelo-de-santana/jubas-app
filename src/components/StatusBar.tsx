import {StatusBar, StatusBarProps} from 'react-native';

export function StatusBarComponent(statusProps: StatusBarProps) {
  return (
    <StatusBar
      {...statusProps}
      backgroundColor={statusProps?.backgroundColor ?? '#F2F2F2'}
      barStyle={statusProps?.barStyle ?? 'dark-content'}
    />
  );
}
