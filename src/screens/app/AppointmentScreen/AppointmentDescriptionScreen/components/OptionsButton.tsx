import {
  ButtonDangerOutline,
  ButtonOptionItem,
  ButtonOptions,
  ButtonSuccess,
  ModalStatus,
} from '@components';
import {useAppointmentUpdate} from '@domain';
import {useVisibility} from '@hooks';
import {AppointmentStackProps} from '@routes';
import {useState} from 'react';

type AppointmentStatus =
  | 'MARCADO'
  | 'EM_ATENDIMENTO'
  | 'FINALIZADO'
  | 'CANCELADO';

enum StatusValues {
  CANCELAR_ATENDIMENTO = 'Cancelar atendimento',
  INICIAR_ATENDIMENTO = 'Iniciar atendimento',
  FINALIZAR_ATENDIMENTO = 'Finalizar atendimento',
  MARCADO = 'Marcado',
  EM_ATENDIMENTO = 'Em atendimento',
}

type OptionsButtonProps = {
  appointmentStatus: AppointmentStatus;
  appointmentId: string;
} & Pick<AppointmentStackProps<'AppointmentDescriptionScreen'>, 'navigation'>;

export function OptionsButton({
  appointmentId,
  appointmentStatus,
  navigation,
}: OptionsButtonProps) {
  const {mutate, isError, isSuccess, isPending} = useAppointmentUpdate();

  const sendOption = () => {
    if (status === StatusValues.INICIAR_ATENDIMENTO) {
      sendData('EM_ATENDIMENTO');
    }
    if (status === StatusValues.FINALIZAR_ATENDIMENTO) {
      sendData('FINALIZADO');
    }
    if (status === StatusValues.CANCELAR_ATENDIMENTO) {
      sendData('CANCELADO');
    }
  };
  const sendData = (appointmentStatus: AppointmentStatus) => {
    mutate({appointmentId, appointmentStatus});
  };

  const [status, setStatus] = useState<StatusValues>(
    appointmentStatus === 'MARCADO'
      ? StatusValues.MARCADO
      : StatusValues.EM_ATENDIMENTO,
  );

  const {isVisible, handleVisibility} = useVisibility({
    initialValue: true,
  });

  const chooseOption = (option: StatusValues) => {
    setStatus(option);
    handleVisibility();
  };

  const options = [
    {
      title: 'Cancelar',
      statusValue: StatusValues.CANCELAR_ATENDIMENTO,
    },
    {
      title: appointmentStatus === 'MARCADO' ? 'Iniciar' : 'Finalizar',
      statusValue:
        appointmentStatus === 'MARCADO'
          ? StatusValues.INICIAR_ATENDIMENTO
          : StatusValues.FINALIZAR_ATENDIMENTO,
    },
  ];

  if (
    appointmentStatus === 'MARCADO' ||
    appointmentStatus === 'EM_ATENDIMENTO'
  ) {
    return (
      <>
        <ModalStatus
          isSuccess={isSuccess}
          isError={isError}
          successAction={navigation.goBack}
        />
        <ButtonOptions
          isCollapsed={isVisible}
          onPress={handleVisibility}
          title={status}>
          {options.map(option => (
            <ButtonOptionItem
              key={option.title}
              title={option.title}
              isSelected={status === option.statusValue}
              onPress={() => chooseOption(option.statusValue)}
            />
          ))}
        </ButtonOptions>

        <ButtonSuccess
          mt="s20"
          bg={
            status === StatusValues.MARCADO ||
            status === StatusValues.EM_ATENDIMENTO
              ? 'secondaryContrast'
              : 'primaryContrast'
          }
          textProps={{variant: 'paragraphMedium', color: 'primary'}}
          title="Salvar"
          disabled={
            status === StatusValues.MARCADO ||
            status === StatusValues.EM_ATENDIMENTO
          }
          loading={isPending}
          onPress={sendOption}
        />
      </>
    );
  }

  return (
    <ButtonDangerOutline
      flex={0}
      borderColor="secondaryContrast"
      textProps={{variant: 'paragraphMedium', color: 'secondaryContrast'}}
      title={appointmentStatus === 'CANCELADO' ? 'Cancelado' : 'Finalizado'}
    />
  );
}
