export function cpfMask(value: string | number) {
  value = String(value);
  value = value.replace(/\D/g, '');
  value = value.replace(/^(\d{3})(\d)/, '$1.$2');
  value = value.replace(/(\d{3})\.(\d{3})(\d)/, '$1.$2.$3');
  value = value.replace(/(\d{3})\.(\d{3})\.(\d{3})(\d{1,2})$/, '$1.$2.$3-$4');
  value = value.replace(/(\d{3})\.(\d{3})\.(\d{3})(\d{3,10})$/, '');
  return value;
}

export function removeCpfMask(value: string | number) {
  value = String(value);
  value = value.replace(/[.-]/g, '');
  return Number(value);
}

export function nameMask(value: string) {
  value = value.replace(/^\d{0}[0-9]/, '');
  return value;
}

export function dateMask(value: string) {
  value = value.replace(/\D/g, '');
  value = value.replace(/^(\d{2})(\d)/, '$1/$2');
  value = value.replace(/(\d{2})\/(\d{2})(\d)$/, '$1/$2/$3');
  value = value.replace(/(\d{2})\/(\d{2})(\d{2,4})$/, '$1/$2/$3');
  return value;
}

function phoneMask(value: string) {
  value = value.replace(/\D/g, '');
  value = value.replace(/^(\d{2})(\d)/, '($1)$2');
  value = value.replace(/(\d{4})(\d{1,4})$/, '$1-$2');
  return value;
}

function timeMask(value: string) {
  value = value.replace(/\D/, '');
  value = value.replace(/\d([2][4]|[3-9][0-9][0-9][0-9])/, '00:00');
  value = value.replace(/([0][0-9]|[1][0-9]|[2][0-3])([0-5][0-9])/, '$1:$2');
  return value;
}

export function fullTimeMask(value: string) {
  value = value.replace(/\D/g, '');
  value = value.replace(/(\d{2})(\d{1})/, '$1:$2');
  value = value.replace(/(\d{2}:\d{2})(\d)/, '$1:$2');
  return value;
}

export function timestampToTimeFormat({time = 1695783600000}: {time?: number}) {
  let date = new Date(Number(time));
  let timeFormatted = date.toLocaleString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return timeFormatted;
}

export function timeToTimestamp({time = '00:00'}: {time?: string}) {
  const [hours, minutes] = time.split(':').map(Number);

  if (
    isNaN(hours) ||
    isNaN(minutes) ||
    hours < 0 ||
    hours > 23 ||
    minutes < 0 ||
    minutes > 59
  ) {
    throw new Error('Hora inválida.');
  }

  const timestamp = new Date();
  timestamp.setHours(hours);
  timestamp.setMinutes(minutes);
  timestamp.setSeconds(0);
  timestamp.setMilliseconds(0);

  return timestamp;
}
