import React,{useState} from 'react'
import Banner  from '../../components/Banner/Banner'
import * as S from './styled'
import { Fontisto,FontAwesome5 } from '@expo/vector-icons';
import Slider from '../../components/Slider/Slider';

export default function Horario() 
{
        const [fromValue, setFromValue] = useState(0);
     const [toValue, setToValue] = useState(0);
     const [value, setValue] = useState(0);
  return (
    <S.Container>
        
        <S.Box>
            <S.BoxTop>
                <S.TerminalLabel>Terminal do Portão</S.TerminalLabel>
                <S.Terminal>021 - Interbairros II</S.Terminal>
            </S.BoxTop>

            <S.BoxCenter>
                <Slider ponto='80'/>
            </S.BoxCenter>
            
            <S.TextProximosOnibusMinuto>
                O seu ônibus chegará em aproximadamente em 5 minutos
            </S.TextProximosOnibusMinuto>
            

            <S.BoxBottom>
                <S.TextProximoOnibusLabel>
                    Proximo ônibus:
                </S.TextProximoOnibusLabel>
                <S.BoxBottomWrapper>
                    <S.TextProximoOnibus>09:45</S.TextProximoOnibus>
                    <S.TextProximoOnibusHoras>10:15</S.TextProximoOnibusHoras>
                    <S.TextProximoOnibusHoras>10:35</S.TextProximoOnibusHoras>
                    <S.BtnGrades>
                        <S.TextGrades>Ver grade</S.TextGrades>
                    </S.BtnGrades>
                </S.BoxBottomWrapper>
            </S.BoxBottom>
        </S.Box>

        <S.Content>
            <S.ContentTop>
                <S.TextChamar>Deseja chamar um carro de aplicativo?</S.TextChamar>
                <S.IconUber>
                    <FontAwesome5 name="uber" size={40} color="black" />
                </S.IconUber>
                <S.Icon99>
                    <S.Text99>99</S.Text99>
                </S.Icon99>
            </S.ContentTop>
            
            <S.ContentBottom>
                <S.TextInformacoes>
                    Informações:
                </S.TextInformacoes>
                <S.TextMessage>O próximo ônibus é adaptado para cadeirantes</S.TextMessage>
                <S.TextMessage>Aceita dinheiro e cartão trasnporte como forma de pagamento</S.TextMessage>
            </S.ContentBottom>
        </S.Content>

        <Banner/>
    </S.Container>
  )
}