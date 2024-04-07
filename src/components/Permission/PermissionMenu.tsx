import { Box } from "../Box";
import { TouchableOpacityItem } from "../TouchableOpacity";

export function PermissionsMenu({
    filterPermission,
    userPermission,
  }: {
    filterPermission: (permission: string) => void;
    userPermission: string;
  }) {
    const permissions = ['Admin', 'Barbeiro', 'Cliente'];
  
    return (
      <Box
        flexDirection="row"
        justifyContent="space-between"
        flexWrap="wrap"
        paddingBottom="s10">
        {permissions.map(permission => (
          <TouchableOpacityItem
            key={permission}
            bg="primaryContrast"
            padding="s10"
            width={100}
            borderRadius="s6"
            textProps={{color: 'primary'}}
            disabled={userPermission === permission.toUpperCase()}
            opacity={userPermission === permission.toUpperCase() ? 0.5 : 1}
            label={permission}
            onPress={() => filterPermission(permission)}
          />
        ))}
      </Box>
    );
  }