import {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export type OptionButtonProps = {
  children: React.ReactNode;
  title: string;
};

export function OptionsButton({children, title}: OptionButtonProps) {
  const [isVisible, setIsVisible] = useState(false);

  function handleVisibility() {
    setIsVisible(!isVisible);
  }

  return (
    <TouchableOpacity
      style={styles.optionsButton}
      onPress={handleVisibility}>
      <Text style={styles.textHeaderOptionButton}>{title}</Text>
      {isVisible ? <>{children}</> : <></>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  optionsButton: {
    maxHeight: 140,
    minHeight: 40,
    backgroundColor: '#f2f2f2',
    borderRadius: 6,
    borderWidth: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  textHeaderOptionButton: {
    fontSize: 14,
    color: '#00000050',
    paddingVertical: 5,
    borderRadius: 6,
  },
});
