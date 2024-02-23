import {ReactNode} from 'react';
import {ScrollView as RNScrollView, View} from 'react-native';

interface Props {
  children: ReactNode;
  backgroundColor: string;
}

export function ScrollViewContainer({
  backgroundColor,
  children,
}: Readonly<Props>) {
  return <RNScrollView style={{backgroundColor}}>{children}</RNScrollView>;
}

export function ScreenViewContainer({
  backgroundColor,
  children,
}: Readonly<Props>) {
  return <View style={{flex: 1, backgroundColor}}>{children}</View>;
}
