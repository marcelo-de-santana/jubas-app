import {ProfileResponse} from '@domain';
import {mask} from '@utils';
import {BoxItem, BoxItems} from '../Box';

interface AttendanceDescriptionProps {
  day?: string;
  employee?: Pick<ProfileResponse, 'id' | 'name'>;
  time?: string;
}

export function AttendanceDescription({
  day,
  time,
  employee,
}: AttendanceDescriptionProps) {
  const getDate = (day: string) => {
    const newDate = new Date(day);
    newDate.setHours(newDate.getHours() + 3);
    return mask.date(newDate);
  };

  return (
    <BoxItem
      textProps={{
        variant: 'paragraphMedium',
        textAlign: 'justify',
      }}
      label="Descrição do atendimento">
      <BoxItems
        flexDirection="column"
        borderRadius="s6"
        padding="s12"
        textProps={{
          textAlign: 'justify',
        }}
        textFields={[
          day && getDate(day),
          `Horário: ${time}`,
          `Nome do barbeiro: ${employee?.name}`,
        ]}
      />
    </BoxItem>
  );
}
