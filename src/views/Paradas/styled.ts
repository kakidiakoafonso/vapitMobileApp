import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { cores } from "../../config/constants";


const IMAGE_SIZE = Dimensions.get("screen").width

export const Container = styled.SafeAreaView`
flex:1;
background-color: ${cores.purple};
`;
export const SeletedContainer = styled.View`
width: 95%;
height: 63px;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
align-self: center;
margin-top: 5%;
`;
export const ImageContainer = styled.View`
width: 60px;
height: 60px;
border-radius: 30px;
background-color: #1EB479;
align-items: center;
justify-content: center;
margin-right: 10px;
`;
export const Image = styled.Image`
width: 35px;
height: 35px;
`;
export const SelectedContent = styled.View`
flex: 1;
`;
export const TextLinha = styled.Text`
color: #DDE3F0;
font-size: 18px;
`;
export const TextSentido = styled.Text`
color: #ABB1CC;
font-size: 14px;
`;
export const Label = styled.Text`
color: #464747;
font-size: 13px;
margin-bottom:10px ;
`;
export const IconContainer = styled.Text`
position: absolute;
right: 0px;
`;




export const TextLinhasContaianer = styled.View`
width: 90%;
align-self: center;
margin-top: 3%;
`;
export const TextLinhas = styled.Text`
font-size: 18px;
color: #FFFFFF;
font-weight: bold;
`;


export const LinhasContaianer = styled.View`
flex: 1;
align-self: center;
margin-top: 3%;
/* background-color: red; */
padding-left: 10px;
padding-bottom: 10px;
`;
export const FlatListLinhas = styled.FlatList`

`;
export const BannerContainer = styled.View`
width: 100%;
height: 155px;
/* background-color: red; */
padding-bottom: 4px;
`;

export const FlatListBanner = styled.FlatList`
`;
export const Banner = styled.Image`
width: ${IMAGE_SIZE+'px'};
height: 138px;
`;
export const IndicatorContainer = styled.View`
width: 60px;
height: 10px;
flex-direction: row;
justify-content: space-between;
align-self: center;
/* background-color: red; */
align-items: center;
`;
export const Indicator = styled.View`
width: 18px;
height: 5px;
border-radius: 4px;
`;