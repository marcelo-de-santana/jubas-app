import {Screen, Text} from '@components';
import {ListOfDays} from './components/ListOfDays';

export function WeeklyScheduleScreen() {
  return (
    <Screen scrollable>
      <Text textAlign="justify" pb="s10">
        Aqui você pode definir a quantidade de dias em que a agenda está
        disponível.
      </Text>
      <Text textAlign="justify" pb="s10">
        Se o tamanho da agenda for igual a 0 apenas o dia atual é retornado como
        disponível.
      </Text>
      <Text textAlign="justify" pb="s10">
        Se o tamanho da agenda for igual a 1 será retornado hoje e amanhã.
      </Text>
      <Text textAlign="justify" pb="s10">
        E assim sucessivamente.
      </Text>
      <Text textAlign="justify" pb="s10">
        O tamanho máximo suportado é 6.
      </Text>
      <Text textAlign="justify" pb="s12">
        Se um dos dias estiver bloqueado será buscado o próximo disponível.
      </Text>
      <ListOfDays />
    </Screen>
  );
}
