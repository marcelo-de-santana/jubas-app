import {input, placeHolderColorTextInput} from '@styles';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';

interface FormModalProps {
  children?: React.ReactNode;
  inputProps: TextInputProps[];
  onPressToClose: () => void;
}

export function FormModal({inputProps, onPressToClose, children}: FormModalProps) {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.pressable} onPress={onPressToClose} />
      <View style={styles.box}>
        {inputProps.map((prop, index) => (
          <TextInput
            key={index}
            {...prop}
            autoCapitalize={prop?.autoCapitalize ?? 'none'}
            placeholderTextColor={
              prop?.placeholderTextColor ?? placeHolderColorTextInput
            }
            style={input.inputModal}
          />
        ))}
        {children}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000E6',
  },
  pressable: {flex: 1},
  box: {padding: 10, backgroundColor: '#F2F2F2', borderRadius: 6},
});
