import {
  ButtonOpacity,
  ButtonOpacityProps,
  TextComponent,
  TextComponentProps,
  ViewModal,
} from '@components';
import {EmployeeTimeCreateScreenProps} from '@routes';
import {buttonRegistry, colorRegistry, themeRegistry} from '@styles';
import {useState} from 'react';
import {View} from 'react-native';

export function EmployeeTimeCreateScreen({
  navigation,
}: EmployeeTimeCreateScreenProps) {
  const [workingHours, setWorkingHours] = useState({
    startTime: '09:00',
    startInterval: '13:00',
    endInterval: '14:00',
    endTime: '19:00',
  });

  return (
    <ViewModal pressableProps={{onPress: () => navigation.goBack()}}>
      <View style={[themeRegistry['container']]}>
        <LineComponent
          buttonProps={{disabled: true}}
          textValues={[
            'Entrada',
            'Início\nIntervalo',
            'Fim\nIntervalo',
            'Saída',
          ]}
        />
        <LineComponent
          textValues={[
            workingHours.startTime,
            workingHours.startInterval,
            workingHours.endInterval,
            workingHours.endTime,
          ]}
          buttonProps={{
            style: [
              buttonRegistry['square-inline'],
              {backgroundColor: colorRegistry['lavender-gray'], height: 40},
            ],
          }}
          textProps={{color: 'black'}}
        />
      </View>
    </ViewModal>
  );
}

interface LineComponentProps {
  textValues?: string[];
  buttonProps?: ButtonOpacityProps;
  textProps?: TextComponentProps;
}

function LineComponent({
  textValues,
  buttonProps,
  textProps,
}: LineComponentProps) {
  return (
    <View style={[themeRegistry['box-flex-row'], {margin: 10}]}>
      {textValues?.map((value, index) => (
        <ButtonOpacity
          key={index}
          style={buttonRegistry['square-inline']}
          {...buttonProps}>
          <TextComponent color="white" {...textProps}>
            {value}
          </TextComponent>
        </ButtonOpacity>
      ))}
    </View>
  );
}
