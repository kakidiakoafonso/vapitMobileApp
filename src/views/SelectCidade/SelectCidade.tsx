import React,{useState} from 'react';
import { AntDesign } from '@expo/vector-icons';
import * as S from "./styled";
import { cores } from '../../config/constants';
import { useNavigation } from '@react-navigation/native';

const data = [1,2,3,4,5,6,7,8,9,10]
export default function SelectCidade() 
{
  const navigation = useNavigation()
  const [selected, setselected] = useState<boolean>(false);
  return (
    <S.Container>
      <S.TopContainer>
      
      <S.Logo source={require('../../assets/images/Logo-White.png')}/>

      <S.Slogan lineBreakMode='clip'>
        Vamos começar
      </S.Slogan>
      </S.TopContainer>

    <S.Select activeOpacity={1}
      onPress={()=> navigation.navigate("Cidades") /*setselected(!selected)*/}>
      <S.TextSelect>
        Selecione a sua cidade
      </S.TextSelect>
      <AntDesign name="down" size={24} color={cores.white} />
    </S.Select>
      <S.TextTour >
        Ao selecionar sua cidade você concorda com
        nossos termos e politica de privacidade
      </S.TextTour>

      
          
    </S.Container>
  );
}
