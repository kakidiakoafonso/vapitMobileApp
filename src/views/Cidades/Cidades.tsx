import React from 'react';
import CidadesItem from '../../components/Cidade/CidadesItem';
import * as S from "./styled";

export default function Cidades() {
  return (
    <S.Container>
        <S.Logo resizeMode='contain' 
        source={require('../../assets/images/Logo-White.png')}/>

        <S.FlatListContainer>
        <S.FlatList
        showsVerticalScrollIndicator={false}
        data={[1,2,3,4,5,6,7,8,9,10,11,12,13]}
        keyExtractor={key=>String(key)}
        renderItem={()=><CidadesItem/>}
        />
        </S.FlatListContainer>
        
    </S.Container>
  );
}
