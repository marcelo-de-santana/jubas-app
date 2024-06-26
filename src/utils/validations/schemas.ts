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
  cpf: fields.cpf,
  password: fields.password,
  checkPass: fields.checkPass,
});

const profileRequest = object().shape({
  name: fields.name,
  cpf: fields.cpf,
});

const userCreate = object().shape({
  email: fields.email,
  password: fields.password,
});

const userUpdate = object().shape({
  email: fields.email,
  password: fields.optionalPassword,
});

const newPassword = object().shape({
  password: fields.password,
  checkPass: fields.checkPass,
});

const specialtyRequest = object().shape({
  name: fields.name,
  price: fields.price,
  timeDuration: fields.stringRequired,
});

const categoryRequest = object().shape({
  name: fields.name,
});

export const schemas = {
  signIn,
  signUp,
  recoveryPass,
  profileRequest,
  userCreate,
  userUpdate,
  newPassword,
  specialtyRequest,
  categoryRequest,
};
