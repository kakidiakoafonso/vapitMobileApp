import styled from "styled-components/native";
import { cores } from "../../config/constants";

export const Container = styled.TouchableOpacity`
width: 361px;
height: 63px;
margin-bottom: 10px;
align-items: center;
flex-direction: row;
justify-content: space-between;
/* background-color: red; */
`;
export const ImageContainer = styled.View`
width: 50px;
height: 50px;
background-color: ${cores.primary};
border-radius: 3px;
justify-content: center;
align-items: center;
`;
export const Image = styled.Image`
width: 32px;
height: 31px;
`;
export const Content = styled.View`
height: 48px;
min-width:50%;
justify-content: space-between;
`;
export const Icon = styled.View`
width: 80px;
height: 50px;
justify-content: center;
align-items: center;
/* background-color: #fff; */
`;
export const NomeCidade = styled.Text`
font-weight: bold;
font-size: 18px;
color: #DDE3F0;
`;
export const Data = styled.Text`
font-size: 13px;
color: #ABB1CC;
`;
export const Borda = styled.View`
width: 300px;
height: 0.5px;
background-color: ${cores.white};
position: absolute;
bottom: 0px;
right: 0px;
`;
