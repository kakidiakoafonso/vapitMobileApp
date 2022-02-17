import * as S from './styled'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ParadasComponent() 
{
    const nav = useNavigation()
    const handleClick = () => 
    {
        nav.navigate("Horario")
        
    }
  return (
    <S.Container onPress={handleClick}>
        <S.IconContainer>
            <Entypo name="location-pin" size={24} color="#fff"/>
        </S.IconContainer>
        <S.InfoContainer>
            <S.Terminal>
                Terminal Campina do siqueiraaaa
            </S.Terminal>
            <S.TerminalInfo>
                Terminal
            </S.TerminalInfo>
        </S.InfoContainer>
    </S.Container>
  )
}