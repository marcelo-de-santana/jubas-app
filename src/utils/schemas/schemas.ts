import * as Yup from 'yup';
import {vCpf, vEmail} from '../validations/regex';

export function signInValidationSchema() {
  return Yup.object().shape({
    email: Yup.string()
      .email('*Campo obrigatório')
      .max(50, ({max}) => `Máximo de ${max} caracteres`)
      .required('*Campo obrigatório'),
    password: Yup.string()
      .min(8, ({min}) => `Mínimo de ${min} caracteres`)
      .max(20, ({max}) => `No máximo ${max} caracteres`)
      .required('*Campo obrigatório'),
  });
}

export function createUserFormSchema() {
  return Yup.object().shape({
    email: Yup.string()
      .email('*Campo obrigatório')
      .max(50, ({max}) => `Máximo de ${max} caracteres`)
      .required('*Campo obrigatório'),
    password: Yup.string()
      .min(8, ({min}) => `Mínimo de ${min} caracteres`)
      .max(20, ({max}) => `No máximo ${max} caracteres`)
      .required('*Campo obrigatório'),
    checkPass: Yup.string()
      .oneOf([Yup.ref('password')], '*As senhas devem ser iguais')
      .required('*Campo obrigatório'),
  });
}
