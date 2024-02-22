import {Screen, ConstructionImage, Text} from '@components';

export function UnderConstruction() {
  return (
    <Screen>
      <Text variant="paragraphVeryLarge" fontWeight="bold" margin="s20">
        Essa página está em construção
      </Text>
      <ConstructionImage />
      <Text variant="paragraphMedium" margin="s10" textAlign="justify">
        Desculpe pelo transtorno, estamos trabalhando para melhorar sua
        experiência.
      </Text>
    </Screen>
  );
}
