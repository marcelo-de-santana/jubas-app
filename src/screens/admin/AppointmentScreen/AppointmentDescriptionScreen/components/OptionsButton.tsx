import {
  ButtonDangerOutline,
  ButtonOptionItem,
  ButtonOptions,
  ButtonSuccess,
  ListSeparator,
  ModalStatus,
} from '@components';
import {
  AppointmentStatus,
  AppointmentStatusEnum,
  useAppointmentUpdate,
} from '@domain';
import {useVisibility} from '@hooks';
import {AppointmentStackProps} from '@routes';
import {useState} from 'react';

type OptionsButtonProps = {
  appointmentStatus: AppointmentStatus;
  appointmentId: string;
} & Pick<AppointmentStackProps<'AppointmentDescriptionScreen'>, 'navigation'>;

export function OptionsButton({
  appointmentId,
  appointmentStatus,
  navigation,
}: OptionsButtonProps) {
  const {
    status,
    isVisible,
    isError,
    isSuccess,
    isPending,
    canContinue,
    getButtonTitle,
    getButtonOptions,
    handleSendData,
    handleChooseOption,
    handleVisibility,
  } = useOptionsButton(appointmentId, appointmentStatus);

  const options = getButtonOptions(appointmentStatus);

  return (
    <>
      <ModalStatus
        isSuccess={isSuccess}
        isError={isError}
        successAction={navigation.goBack}
      />
      {canContinue && (
        <>
          <ListSeparator mb="s12" />
          <ButtonOptions
            isCollapsed={isVisible}
            onPress={handleVisibility}
            title={getButtonTitle(status)}>
            {options.map(({title, value}) => (
              <ButtonOptionItem
                key={value}
                title={title}
                isSelected={status !== value}
                onPress={() => handleChooseOption(value)}
              />
            ))}
          </ButtonOptions>
          <ButtonSendOption
            status={status}
            isPending={isPending}
            handleSendData={handleSendData}
            appointmentStatus={appointmentStatus}
          />
        </>
      )}
    </>
  );
}

type ButtonSendOptionProps = {
  appointmentStatus: AppointmentStatus;
  isPending: boolean;
  handleSendData: () => void;
  status: AppointmentStatus | null;
};

function ButtonSendOption({
  status,
  appointmentStatus,
  isPending,
  handleSendData,
}: ButtonSendOptionProps) {
  const isDisabled =
    (appointmentStatus !== AppointmentStatusEnum.MARCADO &&
      appointmentStatus !== AppointmentStatusEnum.EM_ATENDIMENTO) ||
    !status;

  return (
    <ButtonSuccess
      mt="s20"
      bg={isDisabled ? 'secondaryContrast' : 'primaryContrast'}
      textProps={{variant: 'paragraphMedium', color: 'primary'}}
      title="Salvar"
      disabled={isDisabled}
      loading={isPending}
      onPress={handleSendData}
    />
  );
}

export const useOptionsButton = (
  appointmentId: string,
  appointmentStatus: AppointmentStatus,
) => {
  const {mutate, isError, isSuccess, isPending} = useAppointmentUpdate();
  const [status, setStatus] = useState<AppointmentStatus | null>(null);
  const {isVisible, handleVisibility} = useVisibility({initialValue: true});

  const canContinue =
    appointmentStatus === AppointmentStatusEnum.MARCADO ||
    appointmentStatus === AppointmentStatusEnum.EM_ATENDIMENTO;

  const handleSendData = () => {
    if (status) {
      mutate({appointmentId, appointmentStatus: status});
    }
  };

  const handleChooseOption = (option: AppointmentStatus) => {
    setStatus(option);
    handleVisibility();
  };

  const getButtonTitle = (status: AppointmentStatus | null): string => {
    switch (status) {
      case AppointmentStatusEnum.CANCELADO:
        return buttonTitleMap.CANCELADO;
      case AppointmentStatusEnum.EM_ATENDIMENTO:
        return buttonTitleMap.EM_ATENDIMENTO;
      case AppointmentStatusEnum.FINALIZADO:
        return buttonTitleMap.FINALIZADO;
      default:
        return 'Selecionar';
    }
  };

  const getButtonOptions = (appointmentStatus: AppointmentStatus) => {
    switch (appointmentStatus) {
      case AppointmentStatusEnum.MARCADO:
        return [
          {
            title: buttonTitleMap.CANCELADO,
            value: AppointmentStatusEnum.CANCELADO,
          },
          {
            title: buttonTitleMap.EM_ATENDIMENTO,
            value: AppointmentStatusEnum.EM_ATENDIMENTO,
          },
        ];
      case AppointmentStatusEnum.EM_ATENDIMENTO:
        return [
          {
            title: buttonTitleMap.CANCELADO,
            value: AppointmentStatusEnum.CANCELADO,
          },
          {
            title: buttonTitleMap.FINALIZADO,
            value: AppointmentStatusEnum.FINALIZADO,
          },
        ];
      default:
        return [];
    }
  };

  return {
    status,
    isVisible,
    isError,
    isSuccess,
    isPending,
    canContinue,
    getButtonTitle,
    getButtonOptions,
    handleSendData,
    handleChooseOption,
    handleVisibility,
  };
};

const buttonTitleMap: Record<
  Exclude<AppointmentStatus, 'AVALIADO' | 'MARCADO'>,
  string
> = {
  CANCELADO: 'Cancelar',
  EM_ATENDIMENTO: 'Iniciar atendimento',
  FINALIZADO: 'Finalizar atendimento',
};
