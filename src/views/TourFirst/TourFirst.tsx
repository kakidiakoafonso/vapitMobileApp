import { View, Text } from 'react-native';
import React from 'react';
import * as S from "./styled";
import ButtonNext from '../../components/Buttons/ButtonNext';
import  ButtonPular  from '../../components/Buttons/ButtonPular';
import Dots from '../../components/Dots/Dots';

export default function TourFirst() {
  return (
    <S.Container>
      <S.TopContainer>
      
      <S.Logo source={require('../../assets/images/Logo-White.png')}/>

      <S.Slogan lineBreakMode='clip'>
        Tem horarios de
      </S.Slogan>
      <S.Slogan lineBreakMode='clip'>
        Todos os dias
      </S.Slogan>
      </S.TopContainer>

      <S.ImageContainer source={require('../../assets/images/Image1.png')}/>

      <S.TextTour >
        Nosso time trabalhou muito para 
        pensar em um serviço perfeito para você
      </S.TextTour>

      <ButtonNext routePath='TourSecond'/>
      <Dots active={1}/>
      <ButtonPular/>
    </S.Container>
  );
}
