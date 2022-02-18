import * as S from './styled'
import React,{useState, } from 'react'
import { AntDesign } from '@expo/vector-icons';
import ParadasItem from '../../components/Paradas/Paradas'
import { Dimensions } from 'react-native';
import {publicidades} from '../../services/data'
import { useRoute } from '@react-navigation/native';
import Banner from '../../components/Banner/Banner';


const screenSize = Dimensions.get("screen").width
export default function Paradas() 
{
  const {params} = useRoute()
  console.log("Parametros")
  const {id,code,name} = params.linha
  const [showRecents, setshowRecents] = useState<boolean>(false)
  const [searchText, setsearchText] = useState<string>("")

  
  return (
    <S.Container>
        <Banner/>

       <S.SeletedContainer>
         <S.ImageContainer>
          < S.Image source={require('../../assets/images/onibus.png')}/>
         </S.ImageContainer>
            <S.IconContainer>
              <AntDesign name="right" size={16} color="#ABB1CC" />
            </S.IconContainer>
         <S.SelectedContent>
              <S.TextLinha>{code} - {name}</S.TextLinha>
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