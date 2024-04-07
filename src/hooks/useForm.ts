import {
  FormikConfig,
  FormikErrors,
  FormikTouched,
  FormikValues,
  useFormik,
} from 'formik';

export interface FormikExtractedParams {
  values: FormikValues;
  errors: FormikErrors<FormikValues>;
  touched: FormikTouched<FormikValues>;
  handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
  handleBlur: {
    (e: React.FocusEvent<any, Element>): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };
  handleChange: {
    (e: React.ChangeEvent<any>): void;
    <T_1 = string | React.ChangeEvent<any>>(
      field: T_1,
    ): T_1 extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
  handleChangeText: (key: string, value: string) => void;
  handleChangeBoolean: (key: string) => void;
}

export type UseFormType = FormikConfig<FormikValues>;

export function useForm({...rest}: UseFormType) {
  const formik = useFormik({
    ...rest,
  });

  const handleChangeText = (key: string, value: string | number) => {
    formik.setFieldValue(key, value);
  };

  const handleChangeBoolean = (key: string) => {
    formik.setFieldValue(key, !formik.values[key]);
  };

  return {
    handleChangeText,
    handleChangeBoolean,
    ...formik,
  };
}
