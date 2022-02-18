import React,{useEffect,useState} from 'react';
import CidadesItem from '../../components/Cidade/CidadesItem';
import Loading from '../../components/Loading/Loading';
import api from '../../services/API';
import * as S from "./styled";


export type ICidade = {
id: number,
name: string,
integration: string,
state_id: number,
created_at: string,
updated_at: string,
state: 
  {
  id: number,
  name: string,
  created_at: string,
  updated_at: string
  }
}
export default function Cidades() 
{
  const [cidades, setcidades] = useState<ICidade[]>([])
  const [isloading, setisloading] = useState<boolean>(true)
  useEffect(() => {
  api.get<ICidade[]>('/cities').then((response)=>
  {
    setcidades(response.data.cities)
    setisloading(false)
  }).catch(error=>{
    console.log(error);
  })

  }, [])
  
  return (
    <S.Container>
        <S.Logo resizeMode='contain' 
        source={require('../../assets/images/Logo-White.png')}/>

        <S.FlatListContainer>
        {
          isloading?
          <Loading message='Carregando lista das cidades'/>
          :
          <S.FlatList
        showsVerticalScrollIndicator={false}
        data={cidades}
        keyExtractor={item=>String(item.id)}
        renderItem={({item})=><CidadesItem data={item as ICidade}/>}
        />}
        </S.FlatListContainer>
        
    </S.Container>
  );
}
