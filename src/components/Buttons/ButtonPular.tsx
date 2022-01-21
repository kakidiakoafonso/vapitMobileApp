import { useNavigation } from '@react-navigation/native';
import React from 'react';
import * as S from './styled';

export default function ButtonPular() 
{
  const navigation = useNavigation()
  return (
    <S.ButtonPular onPress={()=> navigation.navigate("SelectCidade")}>
        <S.TextPular>Pular Tour</S.TextPular>
    </S.ButtonPular>
  );
}
