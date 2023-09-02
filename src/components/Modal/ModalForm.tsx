import {input, modal, placeHolderColorTextInput} from '@styles';
import {TextInput, TextInputProps, View} from 'react-native';

export type ModalFormProps = {
  formData: any;
  handleFormData: (key: string, value: string) => void;
  children?: React.ReactNode;
  inputOptions: {label: string; inputProps: TextInputProps}[];
};

export function ModalForm({
  children,
  formData,
  handleFormData,
  inputOptions,
}: ModalFormProps) {
  return (
    <View style={modal.boxItems}>
      <View style={modal.boxForm}>
        {inputOptions.map((option, index) => (
          <TextInput
            key={index}
            {...option.inputProps}
            placeholderTextColor={placeHolderColorTextInput}
            style={input.inputModal}
            value={formData[option.label.toLowerCase()]}
            onChangeText={text => handleFormData(option.label, text)}
          />
        ))}
        {children}
      </View>
    </View>
  );
}
