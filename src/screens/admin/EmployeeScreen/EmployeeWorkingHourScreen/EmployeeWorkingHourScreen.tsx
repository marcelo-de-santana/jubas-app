import {
  BoxFourTimes,
  BoxHeaderWorkingHour,
  ButtonSuccess,
  FlatList,
  ModalStatus,
  Screen,
} from '@components';
import {
  WorkingHourResponse,
  useEmployeeUpdate,
  useWorkingHourGetAll,
} from '@domain';
import {EmployeeStackProps} from '@routes';
import {useState} from 'react';
import {ListRenderItemInfo} from 'react-native';

export function EmployeeWorkingHourScreen({
  navigation,
  route,
}: EmployeeStackProps<'EmployeeWorkingHourScreen'>) {
  const {data, isLoading, isError} = useWorkingHourGetAll();

  const currentWorkingHourId = route.params?.workingHourId;

  const [newWorkingHourId, setNewWorkingHourId] = useState<string | undefined>(
    currentWorkingHourId,
  );

  const handleWorkingHour = (workingHourId: string) => {
    setNewWorkingHourId(workingHourId);
  };

  return (
    <Screen flex={1}>
      <FlatList
        data={data}
        renderItem={props => (
          <WorkingHourListItem
            {...props}
            handleWorkingHour={handleWorkingHour}
            newWorkingHourId={newWorkingHourId}
          />
        )}
        loading={isLoading}
        error={isError}
        ListHeaderComponent={data && BoxHeaderWorkingHour}
        listEmptyTitle="Não foi possível lista."
      />
      {currentWorkingHourId !== newWorkingHourId && (
        <Footer
          navigation={navigation}
          employeeId={route.params.employeeId}
          newWorkingHourId={newWorkingHourId}
        />
      )}
    </Screen>
  );
}

type WorkingHourListItemProps = ListRenderItemInfo<WorkingHourResponse> & {
  newWorkingHourId?: string;
  handleWorkingHour: (workingHourId: string) => void;
};

function WorkingHourListItem({
  newWorkingHourId,
  handleWorkingHour,
  item: workingHour,
}: WorkingHourListItemProps) {
  const {id, startTime, startInterval, endInterval, endTime} = workingHour;
  const selectedTime = newWorkingHourId === id;

  return (
    <BoxFourTimes
      height={50}
      disabled={selectedTime}
      textProps={{color: selectedTime ? 'secondaryContrast' : 'secondary'}}
      textValues={[startTime, startInterval, endInterval, endTime]}
      onPress={() => handleWorkingHour(id)}
    />
  );
}

function Footer({
  navigation,
  employeeId,
  newWorkingHourId,
}: Pick<EmployeeStackProps<'EmployeeWorkingHourScreen'>, 'navigation'> & {
  employeeId: string;
  newWorkingHourId?: string;
}) {
  const {isError, isPending, isSuccess, mutate} = useEmployeeUpdate();

  const sendData = () => {
    mutate({employeeId, workingHourId: newWorkingHourId});
  };

  return (
    <>
      <ModalStatus
        isError={isError}
        isSuccess={isSuccess}
        errorAction={navigation.goBack}
        successAction={navigation.goBack}
      />

      <ButtonSuccess
        loading={isPending}
        backgroundColor="secondaryContrast"
        textProps={{variant: 'paragraphMedium', color: 'secondary'}}
        onPress={sendData}
        title="Salvar"
      />
    </>
  );
}
