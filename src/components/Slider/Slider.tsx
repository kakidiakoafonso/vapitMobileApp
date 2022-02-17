import * as S from './styled'
import React from 'react'
type Props = {
    ponto:string
}
export default function Slider({ponto}:Props) 
{
  return (
    <S.Container>
        <S.SliderView style={{width:ponto+"%"}}>
            <S.Image source={require('../../assets/images/BusPin.png')}/>
        </S.SliderView>
        <S.Image source={require('../../assets/images/MyPin.png')}/>
    </S.Container>
  )
}