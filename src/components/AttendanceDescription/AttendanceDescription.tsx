import {BoxItem, BoxItems} from '@components';
import {ProfileResponse} from '@domain';

interface AttendanceDescriptionProps {
  day: string;
  employee: Pick<ProfileResponse, 'id' | 'name'>;
  time: string;
}

export function AttendanceDescription({
  day,
  time,
  employee,
}: Readonly<AttendanceDescriptionProps>) {
  return (
    <BoxItem
      textProps={{
        variant: 'paragraphMedium',
        color: 'primaryContrast',
        textAlign: 'justify',
      }}
      label="Descrição do atendimento">
      <BoxItems
        flexDirection="column"
        borderRadius="s6"
        padding="s12"
        textProps={{
          color: 'primaryContrast',
          textAlign: 'justify',
        }}
        textFields={[
          `Dia: ${day}`,
          `Horário: ${time}`,
          `Nome do barbeiro: ${employee.name}`,
        ]}
      />
    </BoxItem>
  );
}
