import React from 'react';
import * as S from "./styled";
import { AntDesign } from '@expo/vector-icons';
import { cores } from '../../config/constants';
import { useNavigation } from '@react-navigation/native';

type Props = {
handleClick:()=>void,
code:string,
name:string,
updatedAt:string
}
export default function Linhas({handleClick,code,updatedAt,name}:Props) 
{  
  if(updatedAt==null) updatedAt = "22/21/2020"
  
  return (
    <S.Container activeOpacity={0.7} onPress={handleClick}>
        <S.ImageContainer>
            <S.Image source={require('../../assets/images/onibus.png')}/>
        </S.ImageContainer>
        <S.Content>
            <S.NomeCidade>{code} - {name}</S.NomeCidade>
            <S.Data>Atualizado em {updatedAt}</S.Data>
        </S.Content>
        <S.Icon>
            <AntDesign name="right" size={14} color={cores.white} />
        </S.Icon>
        <S.Borda/>
    </S.Container>
  );
}
