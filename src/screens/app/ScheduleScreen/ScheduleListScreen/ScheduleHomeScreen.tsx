import {Button, ButtonConfirm, Screen, Text} from '@components';
import {ColorName, themeRegistry} from '@styles';
import {useState} from 'react';
import {View} from 'react-native';

type ButtonStyleProps = (condition: boolean) => {
  box: ColorName;
  text: ColorName;
};

export function ScheduleHomeScreen() {
  const [searchType, setSearchType] = useState<string>();
  const [day, setDay] = useState<number>();

  const handleButtonStyle: ButtonStyleProps = (condition: boolean) => ({
    box: condition ? 'blueGray' : 'lightGray',
    text: condition ? 'white' : 'steelBlue',
  });

  const natigaToOther = () => {
    const PATH = `/${searchType}/${day}`;
  };

  return (
    <Screen>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text size="L">O que você prefere?</Text>
        <View style={{marginTop: 20}}>
          <Button
            type="box"
            title="Agendar por serviço"
            backgroundColor={handleButtonStyle(searchType === 'specialty').box}
            textProps={{
              color: handleButtonStyle(searchType === 'specialty').text,
            }}
            onPress={() => setSearchType('specialty')}
          />

          <Button
            type="box"
            title="Agendar por barbeiro"
            backgroundColor={handleButtonStyle(searchType === 'employee').box}
            textProps={{
              color: handleButtonStyle(searchType === 'employee').text,
            }}
            onPress={() => setSearchType('employee')}
          />
        </View>
        {searchType && (
          <>
            <View style={{marginTop: 30, marginBottom: 20}}>
              <Text size="L">Qual o melhor dia?</Text>
            </View>
            <View style={themeRegistry.boxFlexRow}>
              <Button
                title="Hoje"
                type="inline-one-fifth-wide"
                style={{padding: 10, marginHorizontal: 10, borderWidth: 0.5}}
                backgroundColor={handleButtonStyle(day === 1).box}
                textProps={{color: handleButtonStyle(day === 1).text}}
                onPress={() => setDay(1)}
              />
              <Button
                title="Amanhã"
                type="inline-one-fifth-wide"
                style={{padding: 5, marginHorizontal: 10, borderWidth: 0.5}}
                backgroundColor={handleButtonStyle(day === 2).box}
                textProps={{color: handleButtonStyle(day === 2).text}}
                onPress={() => setDay(2)}
              />

              <Button
                title="Depois de amanhã"
                type="inline-one-fifth-wide"
                style={{padding: 10, marginHorizontal: 10, borderWidth: 0.5}}
                backgroundColor={handleButtonStyle(day === 3).box}
                textProps={{color: handleButtonStyle(day === 3).text}}
                onPress={() => setDay(3)}
              />
            </View>
          </>
        )}
      </View>
      {searchType && day && <ButtonConfirm />}
    </Screen>
  );
}
