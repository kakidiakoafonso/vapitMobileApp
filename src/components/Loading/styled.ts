import styled from "styled-components/native";
import {cores} from '../../config/constants'

export const Container = styled.View`
width: 100%;
height: 300px;
justify-content: center;
align-items: center;
/* background-color: red; */
`
export const Spinner = styled.ActivityIndicator``
export const Label = styled.Text`
font-size: 18px;
font-weight: bold;
color: ${cores.white};
margin-top: 20px;
`