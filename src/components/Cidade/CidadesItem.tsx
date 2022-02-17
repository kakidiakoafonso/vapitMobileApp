import React from 'react';
import * as S from "./styled";
import { AntDesign } from '@expo/vector-icons';
import { cores } from '../../config/constants';
import { useNavigation } from '@react-navigation/native';
import { ICidade } from '../../views/Cidades/Cidades';

type Props = {
  data:ICidade
}
export default function CidadesItem({data}:Props) 
{
  const navigation = useNavigation()
  const handleClick = ()=>
  {
    navigation.navigate('Tab',{
      idCidade:data.id
    })
  }
  return (
    <S.Container activeOpacity={0.7} onPress={handleClick}>
        <S.ImageContainer>
            <S.Image source={require('../../assets/images/CidadesIcon1.png')}/>
        </S.ImageContainer>
        <S.Content>
            <S.NomeCidade>{data.name}</S.NomeCidade>
            <S.Data>Atualizado em {data.updated_at}</S.Data>
        </S.Content>
        <S.Icon>
            <AntDesign name="right" size={24} color={cores.white} />
        </S.Icon>
        <S.Borda/>
    </S.Container>
  );
}
