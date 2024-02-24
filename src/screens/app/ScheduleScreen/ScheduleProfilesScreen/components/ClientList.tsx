import {BoxItem, Text} from '@components';
import {IProfileResponse} from '@domain';

export function ClientList({
  profiles,
}: Readonly<{profiles?: IProfileResponse[]}>) {
  return (
    <>
      <Text variant="paragraphMedium" textAlign="justify" paddingVertical="s10">
        Quem vai receber o atendimento?
      </Text>
      {profiles?.map(profile => (
        <BoxItem
          key={profile.id}
          backgroundColor="primaryContrast"
          borderRadius="s6"
          padding="s10"
          marginVertical="s4"
          textProps={{
            variant: 'paragraphMedium',
            color: 'primary',
            textAlign: 'justify',
          }}
          label={profile.name}
        />
      ))}
    </>
  );
}
