import {
  Box,
  BoxItems,
  ButtonProps,
  CollapsibleAccording,
  FlatList,
  Screen,
  Text,
  TextProps,
} from '@components';
import {CategorySpecialtiesResponse, categoryUseCases} from '@domain';
import {ScheduleStackProps} from '@routes';
import {mask} from '@utils';
import {useEffect} from 'react';
import {ListRenderItemInfo} from 'react-native';

export function ScheduleHomeScreen({
  navigation,
}: Readonly<ScheduleStackProps<'ScheduleHomeScreen'>>) {
  const {data, fetch, isError, isLoading, refresh} =
    categoryUseCases.getCategoriesAndSpecialties();

  useEffect(() => {
    fetch();
  }, []);

  const navigateToSpecialtiesScreen = () => {
    navigation.navigate('ScheduleSpecialtiesScreen');
  };

  function renderItem({item}: ListRenderItemInfo<CategorySpecialtiesResponse>) {
    return (
      <CollapsibleAccording
        backgroundColor="primaryContrast"
        paddingHorizontal="s8"
        paddingBottom="s8"
        borderBottomLeftRadius="s6"
        borderBottomRightRadius="s6"
        buttonProps={$buttonProps}
        textProps={$textProps}
        title={item.name}>
        <Box backgroundColor="secondary" borderRadius="s6">
          {item.specialties.map((specialty, index) => {
            const navigateToEmployeesScreen = () => {
              navigation.navigate('ScheduleEmployeesScreen', {specialty});
            };

            return (
              <BoxItems
                key={specialty.id}
                padding="s12"
                onPress={navigateToEmployeesScreen}
                isSeparator={item.specialties.length !== index + 1}
                separatorProps={{
                  backgroundColor: 'secondaryContrast',
                  borderColor: 'secondaryContrast',
                  borderWidth: 0.5,
                  marginHorizontal: 's14',
                }}
                textProps={{color: 'secondaryContrast'}}
                textFields={[
                  specialty.name,
                  `${mask.money(specialty.price)}`,
                  specialty.timeDuration,
                ]}
              />
            );
          })}
        </Box>
      </CollapsibleAccording>
    );
  }

  return (
    <Screen>
      <FlatList
        ListHeaderComponent={
          <Text variant="paragraphMedium" textAlign="justify" padding="s10">
            Selecione um serviço?
          </Text>
        }
        data={data}
        renderItem={renderItem}
        error={isError}
        loading={isLoading}
        refetch={refresh}
        isSeparator={false}
      />
    </Screen>
  );
}

const $buttonProps: ButtonProps = {
  backgroundColor: 'primaryContrast',
  alignItems: 'flex-start',
  justifyContent: 'center',
  paddingHorizontal: 's10',
  height: 50,
  borderTopLeftRadius: 's6',
  borderTopRightRadius: 's6',
  marginTop: 's4',
};

const $textProps: TextProps = {
  variant: 'paragraphMedium',
  color: 'primary',
  textAlign: 'center',
  verticalAlign: 'middle',
};
