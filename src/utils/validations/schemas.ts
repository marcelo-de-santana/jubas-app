import {object} from 'yup';
import {fields} from './fields';

const signIn = object().shape({
  email: fields.email,
  password: fields.password,
});

const signUp = object().shape({
  email: fields.email,
  password: fields.password,
  checkPass: fields.checkPass,
});

const recoveryPass = object().shape({
  email: fields.email,
  password: fields.password,
  checkPass: fields.checkPass,
});

const profile = object().shape({
  name: fields.name,
  cpf: fields.cpf
});

export const schemas = {
  signIn,
  signUp,
  recoveryPass,
  profile,
};
