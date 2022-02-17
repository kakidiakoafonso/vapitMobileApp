import * as S from './styled'
import React from 'react'
import { View,Text } from 'react-native'
import Linhas from '../../components/Linhas/Linhas'

const img = "https://th.bing.com/th/id/OIP.pTO3Xnlo6xmdBUIct6F1ygHaE7?pid=ImgDet&rs=1"
export default function Home() {
  return (
    <S.Container>
        <S.BannerBig resizeMode='stretch'
        resizeMethod='scale'
            source={{uri:img}}
        />
        <S.Content>
            <S.OptionList horizontal 
                showsHorizontalScrollIndicator={false}>
                    <S.Box activeOpacity={0.7}>
                        <S.TextTemperature>
                            Temperatura
                        </S.TextTemperature>
                        <S.TextTemperatureValue>
                            2 ºC
                        </S.TextTemperatureValue>
                        <S.TextBox style={{textAlign:'center'}}>
                            Com previsão de chuva para hoje
                        </S.TextBox>
                    </S.Box>
                    <S.Box activeOpacity={0.7}>
                        <S.TextTemperature>
                            Temperatura
                        </S.TextTemperature>
                        <S.TextTemperatureValue>
                            2 ºC
                        </S.TextTemperatureValue>
                        <S.TextTemperature style={{textAlign:'center'}}>
                            Com previsão de chuva
                        </S.TextTemperature>
                    </S.Box>
                    <S.Box activeOpacity={0.7}>
                        <S.TextTemperature>
                            Temperatura
                        </S.TextTemperature>
                        <S.TextTemperatureValue>
                            2 ºC
                        </S.TextTemperatureValue>
                        <S.TextTemperature style={{textAlign:'center'}}>
                            Com previsão de chuva
                        </S.TextTemperature>
                    </S.Box>
                    <S.Box activeOpacity={0.7}>
                        <S.TextTemperature>
                            Temperatura
                        </S.TextTemperature>
                        <S.TextTemperatureValue>
                            2 ºC
                        </S.TextTemperatureValue>
                        <S.TextTemperature style={{textAlign:'center'}}>
                            Com previsão de chuva
                        </S.TextTemperature>
                    </S.Box>
                    
            </S.OptionList>
            
            <S.TextInfo>
                Últimas linhas consultadas
            </S.TextInfo>    
            
            <S.UltimasLinhasContainer>

            <S.UltimasLinhas
                data={[1,2,3,4,5]}
                keyExtractor={e=>String(e)}
                renderItem={()=><Linhas/>}
            />
            </S.UltimasLinhasContainer>
        </S.Content>
    </S.Container>
  )
}