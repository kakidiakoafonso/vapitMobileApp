import styled from "styled-components/native";
import { cores } from "../../config/constants";

export const Container = styled.SafeAreaView`
flex: 1;
background-color: ${cores.primary};
justify-content: space-evenly;
align-items: center;
`;

export const TopContainer = styled.View`
width: 350px;
height: 108px;
/* background-color: aqua; */
`;
export const Slogan = styled.Text`
width: 270px;
height: 39px;
font-size: 28px;
color: ${cores.white};
`;
export const Logo = styled.Image`
width: 40px;
height: 41px;
position: absolute;
right: 0px;
`;

export const ImageContainer = styled.Image`
width: 351px;
height: 263px;
background-color: aqua;
/* margin: 10% 0px; */
`;


export const TextTour = styled.Text`
width: 277px;
height: 70px;
font-size: 18px;
text-align: center;
color: ${cores.white};
`;
