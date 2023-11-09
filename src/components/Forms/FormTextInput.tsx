import {FormikExtractedParams} from '@hooks';
import {TextInputProps, TextInput} from '../';

export interface FormTextInputProps extends TextInputProps {
  formik: FormikExtractedParams;
  name: string;
}

export function FormTextInput({formik, name, ...props}: FormTextInputProps) {
  return (
    <TextInput
      onBlur={formik.handleBlur(name)}
      onChangeText={text => formik.handleChangeText(name, text)}
      value={formik.values[name]}
      errorMessage={
        formik.touched[name] && formik.errors[name] !== undefined
          ? String(formik.errors[name])
          : ''
      }
      {...props}
    />
  );
}
