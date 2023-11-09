import {ColorName} from './Colors';

export type AlertName = 'light' | 'danger' | 'success';

export const alertStyle: Record<
  AlertName,
  {box: ColorName; text: ColorName}
> = {
  light: {
    box: 'light-gray',
    text: 'steel-blue',
  },
  danger: {
    box: 'red',
    text: 'white',
  },
  success: {
    box: 'light-green',
    text: 'white',
  },
};

export type AlertStatusType = Record<
  number,
  {type: AlertName; message: string}
>;

export const alertStatus: AlertStatusType = {
  200: {type: 'success', message: 'Requisição bem-sucedida.'},
  201: {type: 'success', message: 'Recurso criado com sucesso.'},
  401: {type: 'danger', message: 'Credenciais inválidas.'},
  403: {type: 'danger', message: 'Acesso negado.'},
  404: {type: 'danger', message: 'Recurso não encontrado.'},
  405: {type: 'danger', message: 'Método não permitido.'},
  413: {type: 'danger', message: 'Requisição muito grande.'},
  500: {type: 'light', message: 'Erro interno do servidor.'},
  503: {type: 'light', message: 'Serviço indisponível.'},
  505: {type: 'light', message: 'Erro inesperado.'},
};
