import React from 'react';
import { cores } from '../../config/constants';
import * as S from "./styled";

type Props= {
    active: number
}
export default function Dots({active}:Props) 
{
  return (
   <S.Container>
       <S.Dots style={{backgroundColor: active === 1 ? cores.primary60: cores.white}}/>
       <S.Dots style={{backgroundColor: active === 2 ? cores.primary60: cores.white}}/>
       <S.Dots style={{backgroundColor: active === 3 ? cores.primary60: cores.white}}/>
   </S.Container>
  );
}
