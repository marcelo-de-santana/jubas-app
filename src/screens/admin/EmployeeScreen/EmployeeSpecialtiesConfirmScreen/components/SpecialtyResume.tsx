import {Box, BoxItem, ListSeparator} from '@components';
import {SpecialtyResponse} from '@domain';

interface SpecialtyResumeProps {
  specialties: SpecialtyResponse[];
  headerTitleOneElement: string;
  headerTitleManyElements: string;
}

export function SpecialtyResume({
  specialties,
  headerTitleOneElement,
  headerTitleManyElements,
}: Readonly<SpecialtyResumeProps>) {
  return (
    <Box marginBottom="s10">
      {specialties.length > 0 && (
        <BoxItem
          backgroundColor="primaryContrast"
          borderRadius="s6"
          padding="s10"
          textProps={{
            variant: 'paragraphMedium',
            color: 'primary',
            textAlign: 'justify',
            marginBottom: 's10',
          }}
          label={
            specialties.length === 1
              ? headerTitleOneElement
              : headerTitleManyElements
          }>
          <Box backgroundColor="secondary" borderRadius="s6">
            {specialties.map((specialty, index, array) => (
              <Box key={specialty.id}>
                <BoxItem
                  padding="s10"
                  textProps={{
                    textAlign: 'justify',
                    color: 'primary',
                  }}
                  label={specialty.name}
                />
                {array.length - 1 !== index && (
                  <ListSeparator borderColor="secondaryContrast" mx="s10" />
                )}
              </Box>
            ))}
          </Box>
        </BoxItem>
      )}
    </Box>
  );
}
