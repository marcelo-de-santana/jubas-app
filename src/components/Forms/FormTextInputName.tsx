import {FormTextInputProps, TextInput} from '..';
import {mask} from '@utils';

export function FormTextInputName({
  formik,
  name,
  ...props
}: Readonly<FormTextInputProps>) {
  return (
    <TextInput
      label="Digite seu Nome"
      placeholder="Cristiano Matos"
      maxLength={50}
      onBlur={formik.handleBlur(name)}
      onChangeText={text => formik.handleChangeText(name, text)}
      value={mask.name(formik.values[name])}
      errorMessage={
        formik.touched[name] && formik.errors[name] !== undefined
          ? String(formik.errors[name])
          : ''
      }
      {...props}
    />
  );
}
