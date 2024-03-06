import {FormikExtractedParams} from '@hooks';
import {TextInput, TextInputProps} from '../TextInput/TextInput';

export interface FormTextInputProps extends TextInputProps {
  formik: FormikExtractedParams;
  name: string;
}

export function FormTextInput({
  formik,
  name,
  ...props
}: Readonly<FormTextInputProps>) {
  return (
    <TextInput
      onBlur={formik.handleBlur(name)}
      onChangeText={formik.handleChange(name)}
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
