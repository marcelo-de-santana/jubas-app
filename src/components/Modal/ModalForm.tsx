import {input, modal, placeHolderColorTextInput} from '@styles';
import {TextInput, TextInputProps, View} from 'react-native';

export type ModalFormProps = {
  children?: React.ReactNode;
  inputProps: TextInputProps[];
};
export function ModalForm({children, inputProps}: ModalFormProps) {
  return (
    <View style={modal.boxItems}>
      <View style={modal.boxForm}>
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
    </View>
  );
}
