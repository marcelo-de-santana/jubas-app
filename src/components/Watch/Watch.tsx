import {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

export function Watch() {
  const [time, setTime] = useState('');

  function searchTime() {
    const date = new Date();
    const hour = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    return `${hour}:${minutes}:${seconds}`;
  }

  useEffect(() => {
    setTimeout(() => {
      setTime(searchTime());
    }, 1000);
  });

  return (
    <View
      style={{
        borderRadius: 6,
        padding: 40,
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
      <Text style={{fontSize: 60, color: '#3C4659'}}>{time}</Text>
    </View>
  );
}
