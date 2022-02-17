import React from 'react';
import * as S from "./styled";
import { AntDesign } from '@expo/vector-icons';
import { cores } from '../../config/constants';
import { useNavigation } from '@react-navigation/native';

type Props = {
route: "Paradas"| "Tab"
}
export default function Linhas({route="Tab"}:Props) 
{
  const navigation = useNavigation()
  const handleClick = ()=>
  {
    navigation.navigate(route)
  }
  return (
    <S.Container activeOpacity={0.7} onPress={handleClick}>
        <S.ImageContainer>
            <S.Image source={require('../../assets/images/onibus.png')}/>
        </S.ImageContainer>
        <S.Content>
            <S.NomeCidade>021 - Interbairros ||</S.NomeCidade>
            <S.Data>Atualizado em 21/03/2022</S.Data>
        </S.Content>
        <S.Icon>
            <AntDesign name="right" size={14} color={cores.white} />
        </S.Icon>
        <S.Borda/>
    </S.Container>
  );
}
