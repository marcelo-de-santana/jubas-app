import { Screen } from '@components';
import {placeHolderColorTextInput, theme} from '@styles';
import {
  Keyboard,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export function SignUpScreen() {
  return (
    <Screen>
      <ScrollView>
        <Pressable style={theme.horizontalMargins} onPress={Keyboard.dismiss}>
          <Text style={theme.label}>CPF</Text>
          <TextInput
            style={theme.input}
            keyboardType="decimal-pad"
            placeholder="000.000.000-00"
            maxLength={14}
            editable={false}
            placeholderTextColor={placeHolderColorTextInput}
            // value={values.CPF}
          />

          <Text style={theme.label}>Nome Completo</Text>
          <TextInput
            style={theme.input}
            keyboardType="default"
            placeholder="Juba de Leão"
            maxLength={50}
            placeholderTextColor={placeHolderColorTextInput}
            // // value={values.NAME}
            // onChangeText={text => handleTextInput('NAME', text)}
          />
          {/* {errors.NAME && <TextAlert error={errors.NAME} />} */}

          <Text style={theme.label}>E-mail</Text>
          <TextInput
            style={theme.input}
            keyboardType="email-address"
            placeholder="jubasdeleao@exemplo.com"
            placeholderTextColor={placeHolderColorTextInput}
            maxLength={50}
            // value={values.EMAIL}
            // onChangeText={text => handleTextInput('EMAIL', text)}
          />
          {/* {errors.EMAIL && <TextAlert error={errors.EMAIL} />} */}

          <Text style={theme.label}>Senha</Text>
          <TextInput
            style={theme.input}
            keyboardType="default"
            placeholder="********"
            placeholderTextColor={placeHolderColorTextInput}
            maxLength={20}
            secureTextEntry={true}
            // onChangeText={handleChange('PASSWORD')}
          />
          {/* {errors.PASSWORD && <TextAlert error={errors.PASSWORD} />} */}

          <Text style={theme.label}>Confirmar Senha</Text>
          <TextInput
            style={theme.input}
            keyboardType="default"
            placeholder="********"
            placeholderTextColor={placeHolderColorTextInput}
            maxLength={20}
            secureTextEntry={true}
            // onChangeText={handleChange('CHECKPASS')}
          />
          {/* {errors.CHECKPASS && <TextAlert error={errors.CHECKPASS} />} */}
          <View style={{marginTop: 30}}>
            <TouchableOpacity
              style={theme.button}
              //   onPress={() => handleSubmit()}
            >
              <Text style={theme.textButton}>Confirmar</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </ScrollView>
    </Screen>
  );
}
