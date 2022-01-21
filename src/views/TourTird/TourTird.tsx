import { View, Text } from 'react-native';
import React from 'react';
import * as S from "./styled";
import ButtonNext from '../../components/Buttons/ButtonNext';
import  ButtonPular  from '../../components/Buttons/ButtonPular';
import Dots from '../../components/Dots/Dots';

export default function TourTird() {
  return (
    <S.Container>
      <S.TopContainer>
      
      <S.Logo source={require('../../assets/images/Logo-White.png')}/>

      <S.Slogan lineBreakMode='clip'>
        Muito SIMPLES de 
      </S.Slogan>
      <S.Slogan lineBreakMode='clip'>
        consultar
      </S.Slogan>
      </S.TopContainer>

      <S.ImageContainer source={require('../../assets/images/Image3.png')}/>

      <S.TextTour >
        Use o seu tempo da 
        melhor forma até, seu ônibus chegar
      </S.TextTour>

      <ButtonNext routePath='SelectCidade'/>
      <Dots active={3}/>
      <ButtonPular/>
    </S.Container>
  );
}
