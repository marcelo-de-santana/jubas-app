import {Box, BoxItem} from '@components';
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
          {specialties.map(specialty => (
            <BoxItem
              backgroundColor="secondary"
              padding="s10"
              borderRadius="s6"
              key={specialty.id}
              textProps={{
                textAlign: 'justify',
                color: 'primary',
              }}
              label={specialty.name}
            />
          ))}
        </BoxItem>
      )}
    </Box>
  );
}
