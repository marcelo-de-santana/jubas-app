import {
  Box,
  Collapsible,
  FormTextInput,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from '@components';
import {FormikExtractedParams} from '@hooks';
import {useState} from 'react';
import {mask} from '@utils';

export function DocumentFormGroup({formik}: {formik: FormikExtractedParams}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => setIsOpen(prev => !prev);

  const handleIdentificationType = (value: string) => {
    formik.handleChangeText('identificationType', value);
    toggleIsOpen();
  };

  const {identificationType, identificationNumber} = formik.values;
  const isCPF = identificationType === 'CPF';

  return (
    <Box flexDirection="row">
      <Box>
        <Text variant="paragraphSmall" my="s4">
          Documento
        </Text>
        <TouchableOpacity
          justifyContent="center"
          bg="secondary"
          activeOpacity={0.7}
          height={50}
          width={80}
          borderTopStartRadius="s6"
          borderBottomStartRadius={isOpen ? 's0' : 's6'}
          borderRightWidth={0.5}
          borderRightColor="primary"
          onPress={toggleIsOpen}>
          <Text color="primary">{identificationType}</Text>
        </TouchableOpacity>
        <Collapsible borderTopWidth={0.5} collapsed={!isOpen}>
          <TouchableOption
            label="CPF"
            isSelected={isCPF}
            onPress={() => handleIdentificationType('CPF')}
          />
          <TouchableOption
            label="CNPJ"
            isSelected={!isCPF}
            onPress={() => handleIdentificationType('CNPJ')}
            borderBottomStartRadius="s6"
            borderBottomEndRadius="s6"
          />
        </Collapsible>
      </Box>
      <Box flex={1}>
        <FormTextInput
          name="identificationNumber"
          formik={formik}
          keyboardType="numeric"
          placeholder={isCPF ? PLACEHOLDERS.CPF : PLACEHOLDERS.CNPJ}
          value={
            isCPF
              ? mask.cpf(identificationNumber)
              : mask.formatCNPJ(identificationNumber)
          }
          maxLength={isCPF ? MAX_LENGTH.CPF : MAX_LENGTH.CNPJ}
          boxTextInputProps={{
            borderTopStartRadius: 's0',
            borderBottomStartRadius: 's0',
          }}
        />
      </Box>
    </Box>
  );
}

function TouchableOption({
  label,
  isSelected,
  ...props
}: {
  label: string;
  isSelected: boolean;
} & TouchableOpacityProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      bg={isSelected ? 'secondaryContrast' : 'secondary'}
      height={50}
      width={80}
      justifyContent="center"
      {...props}>
      <Text color={isSelected ? 'secondary' : 'secondaryContrast'}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const PLACEHOLDERS = {
  CPF: '123.456.789-10',
  CNPJ: '99.999.999/9999-99',
};
const MAX_LENGTH = {
  CPF: 14,
  CNPJ: 18,
};
