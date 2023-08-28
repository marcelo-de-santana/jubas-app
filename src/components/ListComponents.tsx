import { theme } from "@styles";
import { Text, TouchableOpacity, View } from "react-native";

export type ListItemProps = {onPress?: () => void; title: string | number};

export function ListItem({onPress, title}: ListItemProps) {
  return (
    <View style={theme.blueBoxItems}>
      <TouchableOpacity style={theme.greyBoxItemsFlex} onPress={onPress}>
        <Text style={theme.darkBlueTextSmall}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}
