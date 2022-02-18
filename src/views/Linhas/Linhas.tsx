import * as S from './styled'
import React,{useState,useEffect } from 'react'
import { AntDesign } from '@expo/vector-icons';
import LinhasComponent from '../../components/Linhas/Linhas'
import { Dimensions } from 'react-native';
import {publicidades} from '../../services/data'
import Banner from '../../components/Banner/Banner';
import { useNavigation, useRoute } from '@react-navigation/native';
import api from '../../services/API';
import Loading from '../../components/Loading/Loading';

const img = "https://pbs.twimg.com/media/FBwMEAMWQAA6BOO.jpg"


const screenSize = Dimensions.get("screen").width
export default function Linhas() 
{
  const navigation = useNavigation()
  const {params} = useRoute()
  console.log(params)
  
  const [showRecents, setshowRecents] = useState<boolean>(false)
  const [searchText, setsearchText] = useState<string>("")
  const [isloading, setisloading] = useState<boolean>(true)
  const [lines, setlines] = useState([])

 
  useEffect(() => {
    api.get('/cities/3/lines').then((response)=>
    {
      setlines(response.data.lines)
      setisloading(false)
    }).catch(error=>{
      console.log(error);
    })
  }, [])

  const handleClick = (item:any)=>
  {
    navigation.navigate("Paradas",
    {
      idCidade:3,
      linha:item
    })
    console.log("Click linhas");
    console.log(item.id);
    
    
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
          {isloading?
            <Loading message='Carregando linhas da cidade'/>
            :
            <S.FlatListLinhas
              data={lines}
              keyExtractor={((item)=>item.id)}
              renderItem={({item})=>
              <LinhasComponent name={item.name}
              code={item.code}  updatedAt={item.updated_at}
              handleClick={()=>handleClick(item)}/>}
            />}
        </S.LinhasContaianer>

        <Banner/>
       
    </S.Container>
  )
}