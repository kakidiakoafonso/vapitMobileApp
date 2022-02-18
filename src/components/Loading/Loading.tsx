import * as S from './styled'
import React from 'react'
import {cores} from '../../config/constants'

type Props = {
    message:string
}
export default function Loading({message}:Props) {
  return (
    <S.Container>
        <S.Spinner size={'large'} color={cores.white}/>
        <S.Label>{message}</S.Label>
    </S.Container>
  )
}