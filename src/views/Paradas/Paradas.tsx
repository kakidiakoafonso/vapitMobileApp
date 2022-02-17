import * as S from './styled'
import React,{useState, } from 'react'
import { AntDesign } from '@expo/vector-icons';
import ParadasItem from '../../components/Paradas/Paradas'
import { Dimensions } from 'react-native';
import {publicidades} from '../../services/data'


const screenSize = Dimensions.get("screen").width
export default function Paradas() 
{
  const [activeIndex, setactiveIndex] = useState<number>(1)
  const [showRecents, setshowRecents] = useState<boolean>(false)
  const [searchText, setsearchText] = useState<string>("")

  function scrollEndHandle(params:any) 
  {
    const index = params.nativeEvent.contentOffset.x/screenSize
    setactiveIndex(index)    
  }
  return (
    <S.Container>
         <S.BannerContainer>
            <S.FlatListBanner
                horizontal
                showsHorizontalScrollIndicator={false}
                data={publicidades}
                pagingEnabled={true}            
                onMomentumScrollEnd={scrollEndHandle}
                keyExtractor={e=>String(e.img)}
                renderItem={({item})=>(
                  <S.Banner
                    source={{uri:item.img}}
                    />
                )}
              />

            <S.IndicatorContainer>
              {
                publicidades.map((e,i)=>
                <S.Indicator key={i}
                  style={{backgroundColor:i==activeIndex? "#8B4CEF":"#464747"}}
                />)      
              }
            </S.IndicatorContainer>
        </S.BannerContainer>

       <S.SeletedContainer>
         <S.ImageContainer>
          < S.Image source={require('../../assets/images/onibus.png')}/>
         </S.ImageContainer>
            <S.IconContainer>
              <AntDesign name="right" size={16} color="#ABB1CC" />
            </S.IconContainer>
         <S.SelectedContent>
              <S.TextLinha>021 - Interbairros II</S.TextLinha>
              <S.TextSentido>Sentido Anti-Horário / T. Capão Raso</S.TextSentido>
         </S.SelectedContent>

       </S.SeletedContainer>

        <S.TextLinhasContaianer>
          <S.TextLinhas>Linhas</S.TextLinhas>
        </S.TextLinhasContaianer>

        <S.LinhasContaianer>
          <S.Label>
            Selecione a parada que deseja saber os horários
          </S.Label>
          <S.FlatListLinhas
            data={[1,2,3,4,5,6,7,8]}
            keyExtractor={e=>String(e)}
            renderItem={()=><ParadasItem/>}
          />
        </S.LinhasContaianer>

       
    </S.Container>
  )
}