import {string, ref} from 'yup';

const email = string()
  .email('*Deve ser e-mail')
  .max(50, ({max}) => `Máximo de ${max} caracteres`)
  .required('*Campo obrigatório');

const password = string()
  .min(8, ({min}) => `Mínimo de ${min} caracteres`)
  .max(20, ({max}) => `No máximo ${max} caracteres`)
  .required('*Campo obrigatório');

const optionalPassword = string()
  .min(8, ({min}) => `Mínimo de ${min} caracteres`)
  .max(20, ({max}) => `No máximo ${max} caracteres`)
  .optional();

const checkPass = string()
  .oneOf([ref('password')], '*As senhas devem ser iguais')
  .required('*Campo obrigatório');

const name = string()
  .min(5, '*Nome muito curto')
  .max(50, '*Nome muito longo')
  .required('*Campo obrigatório');

const cpf = string().length(14, '*Deve ser CPF').required('*Campo obrigatório');

const optionalCpf = string().length(14, '*Deve ser CPF').nullable();

export const fields = {
  email,
  name,
  cpf,
  optionalCpf,
  optionalPassword,
  password,
  checkPass,
};
