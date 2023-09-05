import {AppStackProps} from '@routes';
import {text} from '@styles';
import { useEffect } from 'react';
import {Text} from 'react-native';

export function UserDetailsScreen({route}: AppStackProps) {

  useEffect(()=>{
    console.log(route.params)
  },[])

  return (
    <>
      <Text style={text.blueTextCenter20}>
        
      </Text>
    </>
  );
}
