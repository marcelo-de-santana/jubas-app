import {Screen} from '@components';
import { specialtyApi } from 'src/domain/SpecialtyDomain/specialtyApi';

export function ScheduleSpecialtiesListScreen() {
const {} = specialtyApi.getAll()

//TODO => CRIAR ROTA QUE RETORNA OS FUNCIONÁRIOS QUE REALIZAM A ESPECIALIDADE E 
//OS HORÁRIOS DE ATENDIMENTO

  return <Screen></Screen>;
}
