import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { cores } from "../../config/constants";


const IMAGE_SIZE = Dimensions.get("screen").width

export const Container = styled.SafeAreaView`
flex:1;
background-color: ${cores.purple};
`;
export const SearchContainer = styled.View`
width: 353px;
height: 36px;
background-color: #464747;
border-radius: 20px;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
align-self: center;
margin-top: 5%;
`;
export const Search = styled.TextInput`
width: 300px;
height: 36px;
border-radius: 20px;
color: #FFFFFF;
font-weight: bold;
`;
export const RecentesContainer = styled.View`
width: 353px;
height: 135px;
align-self: center;
margin-top: 10px;

`;
export const TextRecentesLabel = styled.Text`
font-size: 18px;
color: #FFFFFF;
font-weight: bold;
`;
export const RecentesContnent = styled.View`
flex: 1;
padding-top: 10px;
justify-content: space-between;
`;
export const RecentesItem = styled.TouchableOpacity`
width: 100%;
flex-direction: row;
`;
export const TextRecentes = styled.Text`
color:#464747;
font-size: 16px;
font-weight: bold;
margin-left: 15px;
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