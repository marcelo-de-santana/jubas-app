import {button, text, theme} from '@styles';
import {Children} from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';

export type ButtonProps = {
  onPress?: () => void;
  title: string;
};

export function BlueButton({onPress, title}: ButtonProps) {
  return (
    <TouchableOpacity style={button.blueButton} onPress={onPress}>
      <Text style={text.whiteTextCenter18}>{title}</Text>
    </TouchableOpacity>
  );
}

export function WhiteButton({onPress, title}: ButtonProps) {
  return (
    <TouchableOpacity style={button.whiteButton} onPress={onPress}>
      <Text style={text.blueTextCenter18}>{title}</Text>
    </TouchableOpacity>
  );
}

export function ButtonIcon({
  color,
  children,
  onPress,
}: {
  color?: string;
  children: React.ReactNode;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity
      style={{
        padding: 10,
        borderRadius: 10,
        backgroundColor: `${color}`,
        position: 'absolute',
        right: 20,
        bottom: 20,
      }}
      onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
}

interface ButtonOpacityProps extends TouchableOpacityProps {
  color?: string;
  children?: React.ReactNode;
}

export function ButtonOpacity({
  color = '#3c4659',
  children,
  ...props
}: ButtonOpacityProps) {
  return (
    <TouchableOpacity
      {...props}
      style={{
        flex: 1,
        backgroundColor: color,
        borderRadius: 6,
        padding: 5,
        justifyContent: 'center',
      }}>
      {children}
    </TouchableOpacity>
  );
}

export function ButtonIconOpacity({
  children,
  color = 'red',
  ...props
}: ButtonOpacityProps) {
  return (
    <TouchableOpacity
      {...props}
      style={{
        backgroundColor: color,
        padding: 5,
        borderRadius: 6,
        marginHorizontal: 5,
        justifyContent: 'center',
      }}>
      {children}
    </TouchableOpacity>
  );
}
