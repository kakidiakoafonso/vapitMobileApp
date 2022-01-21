import React from 'react';
import * as S from "./styled";
import { AntDesign } from '@expo/vector-icons';
import { cores } from '../../config/constants';

export default function CidadesItem() {
  return (
    <S.Container activeOpacity={0.7}>
        <S.ImageContainer>
            <S.Image source={require('../../assets/images/CidadesIcon1.png')}/>
        </S.ImageContainer>
        <S.Content>
            <S.NomeCidade>Sete Lagoas/MG</S.NomeCidade>
            <S.Data>Atualizado em 21/03/2022</S.Data>
        </S.Content>
        <S.Icon>
            <AntDesign name="right" size={24} color={cores.white} />
        </S.Icon>
        <S.Borda/>
    </S.Container>
  );
}
