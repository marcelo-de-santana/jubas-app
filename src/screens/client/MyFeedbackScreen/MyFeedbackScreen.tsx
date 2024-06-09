import {
  AppointmentDescription,
  ButtonSuccess,
  FormTextInputName,
  ListEmpty,
  ModalStatus,
  Screen,
  Text,
} from '@components';
import {useFeedbackCreate, useFeedbackGetById} from '@domain';
import {useForm} from '@hooks';
import {ClientStackProps} from '@routes';

export function MyFeedbackScreen({
  navigation: {goBack},
  route: {
    params: {appointmentId, status},
  },
}: ClientStackProps<'MyFeedbackScreen'>) {
  return (
    <Screen flex={1}>
      {status === 'AVALIADO' ? (
        <FeedbackDescription appointmentId={appointmentId} />
      ) : (
        <FeedbackForm appointmentId={appointmentId} goBack={goBack} />
      )}
    </Screen>
  );
}

function FeedbackDescription({appointmentId}: {appointmentId: string}) {
  const {data: feedback, isLoading} = useFeedbackGetById(appointmentId);

  return (
    <>
      {isLoading && <ListEmpty loading={isLoading} />}
      {feedback && (
        <>
          <AppointmentDescription appointment={feedback} />
          <Text textAlign="justify">Comentário: {feedback.comment}</Text>
        </>
      )}
    </>
  );
}

type FeedbackFormProps = {
  appointmentId: string;
  goBack: () => void;
};

function FeedbackForm({appointmentId, goBack}: FeedbackFormProps) {
  const {mutate, isError, isSuccess, isPending} = useFeedbackCreate();

  const formik = useForm({
    initialValues: {comment: ''},
    onSubmit: values =>
      mutate({appointmentId, comment: values.comment, rating: 'BOM'}),
  });

  return (
    <>
      <ModalStatus
        isError={isError}
        isSuccess={isSuccess}
        successAction={goBack}
      />
      <FormTextInputName
        label=""
        name="comment"
        multiline
        placeholder="O atendimento foi..."
        formik={formik}
        maxLength={200}
        boxTextInputProps={{height: 100}}
      />
      <ButtonSuccess
        loading={isPending}
        bg="primaryContrast"
        mt="s32"
        textProps={{variant: 'paragraphMedium', color: 'primary'}}
        onPress={formik.handleSubmit}
        title="Salvar"
      />
    </>
  );
}
