import React from 'react';
import * as S from './styled'
import { AntDesign } from '@expo/vector-icons';
import { cores } from '../../config/constants';
import { useNavigation } from '@react-navigation/native';


type Props = {
  backgroundColor?:string
  textIconColor?:string,
  routePath:string,
}
export default function ButtonNext(
  {backgroundColor=cores.primary60,textIconColor=cores.white,routePath}:Props) 
{
  const navigation = useNavigation()
  return (
    <S.Container activeOpacity={0.6} color={ backgroundColor? backgroundColor:cores.primary60}
    onPress={()=> navigation.navigate(routePath)}>
        <S.Text>Próximo</S.Text>
        <S.IconContainer>
          <AntDesign name="arrowright" size={24} color={cores.white} />
        </S.IconContainer>
    </S.Container>
  );
}
