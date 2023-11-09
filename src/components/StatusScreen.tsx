import {ModalAlert, ModalAlertProps} from './Modal';
import {AlertStatusType, alertStatus} from '@styles';

interface StatusScreen extends ModalAlertProps {
  customStatus?: AlertStatusType;
}

export function StatusScreen({status, customStatus, ...props}: StatusScreen) {
  const alert = {...alertStatus, ...customStatus};
  const color = alert[status ?? 505].type;
  let message = alert[status ?? 505].message;
  return (
    <ModalAlert status={status} message={message} color={color} {...props} />
  );
}
