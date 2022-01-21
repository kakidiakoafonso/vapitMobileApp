import { View, Text } from 'react-native';
import React from 'react';
import * as S from "./styled";
import ButtonNext from '../../components/Buttons/ButtonNext';
import  ButtonPular  from '../../components/Buttons/ButtonPular';
import Dots from '../../components/Dots/Dots';
import { cores } from '../../config/constants';

export default function TourSecond() {
  return (
    <S.Container>
      <S.TopContainer>
      
      <S.Logo source={require('../../assets/images/Logo-White.png')}/>

      <S.Slogan lineBreakMode='clip'>
        Não se atrapalhe nos
      </S.Slogan>
      <S.Slogan lineBreakMode='clip'>
         HORÁRIOS
      </S.Slogan>
      </S.TopContainer>

      <S.ImageContainer source={require('../../assets/images/Image2.png')}/>

      <S.TextTour >
        Deixa que o nosso app cuide disso para você
      </S.TextTour>

      <ButtonNext routePath='TourTird' backgroundColor={cores.purple80}/>
      <Dots active={2}/>
      <ButtonPular/>
    </S.Container>
  );
}
