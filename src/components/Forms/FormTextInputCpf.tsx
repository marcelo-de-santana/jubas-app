import {mask} from '@utils';
import {TextInput} from '../TextInput/TextInput';
import {FormTextInputProps} from './FormTextInput';

export function FormTextInputCpf({formik, name, ...props}: Readonly<FormTextInputProps>) {
  return (
    <TextInput
      label="Digite seu CPF"
      placeholder="123.456.789-10"
      maxLength={14}
      keyboardType="numeric"
      onBlur={formik.handleBlur(name)}
      onChangeText={formik.handleChange(name)}
      value={mask.cpf(formik.values[name])}
      errorMessage={
        formik.touched[name] && formik.errors[name] !== undefined
          ? String(formik.errors[name])
          : ''
      }
      {...props}
    />
  );
}
