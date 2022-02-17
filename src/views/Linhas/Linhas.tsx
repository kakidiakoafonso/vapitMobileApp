import * as S from './styled'
import React,{useState, } from 'react'
import { AntDesign } from '@expo/vector-icons';
import LinhasComponent from '../../components/Linhas/Linhas'
import { Dimensions } from 'react-native';
import {publicidades} from '../../services/data'

const img = "https://pbs.twimg.com/media/FBwMEAMWQAA6BOO.jpg"


const screenSize = Dimensions.get("screen").width
export default function Linhas() 
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
        <S.SearchContainer>
          
          <AntDesign name="search1" size={24} color="#FFFFFF" />
          <S.Search
            placeholder='Buscar linha' placeholderTextColor={"#FFFFFF"}
            value={searchText}
            onBlur={()=>setshowRecents(false)}
            onFocus={()=>setshowRecents(true)}
          />
        </S.SearchContainer>
        {
          showRecents &&         
          <S.RecentesContainer>
            <S.TextRecentesLabel>Buscas recentes</S.TextRecentesLabel>
            
            <S.RecentesContnent>

                  <S.RecentesItem>
                    <AntDesign name="clockcircleo" size={24} color="#464747" />
                      <S.TextRecentes>Luanda</S.TextRecentes>
                  </S.RecentesItem>
                  <S.RecentesItem>
                    <AntDesign name="clockcircleo" size={24} color="#464747" />
                      <S.TextRecentes>Luanda</S.TextRecentes>
                  </S.RecentesItem>
                  <S.RecentesItem>
                    <AntDesign name="clockcircleo" size={24} color="#464747" />
                      <S.TextRecentes>Luanda</S.TextRecentes>
                  </S.RecentesItem>

            </S.RecentesContnent>
          </S.RecentesContainer>
          }


        <S.TextLinhasContaianer>
          <S.TextLinhas>Linhas</S.TextLinhas>
        </S.TextLinhasContaianer>

        <S.LinhasContaianer>
          <S.FlatListLinhas
            data={[1,2,3,4,5]}
            keyExtractor={e=>String(e)}
            renderItem={()=><LinhasComponent route='Paradas'/>}
          />
        </S.LinhasContaianer>

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
    </S.Container>
  )
}