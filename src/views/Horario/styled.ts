import styled from "styled-components/native";
import { cores } from "../../config/constants";

export const Container = styled.SafeAreaView`
flex:1;
background-color: ${cores.purple};
justify-content: space-between;
`;
export const Box = styled.View`
width: 354px;
height: 248px;
background-color: #480CA8;
align-self: center;
border-radius: 7px;
padding-left: 10px;
padding-top: 10px;
justify-content: space-evenly;
margin-top: 10px;
`;
export const BoxTop = styled.View`
`;
export const TerminalLabel = styled.Text`
color: #FFFFFF;
font-size: 22px;
font-weight: bold;
`;
export const Terminal = styled.Text`
color: #FFFFFF;
font-size: 17px;
`;

export const BoxCenter = styled.View`
height: 65px;
width: 95%;
align-items: center;
justify-content: center;
/* background-color: red; */
`;

export const TextProximosOnibusMinuto = styled.Text`
color: #FFFFFF;
font-size: 12px;
font-weight: bold;
`;

export const BoxBottom = styled.View`
height: 65px;
width: 95%;
/* background-color: red; */
`;
export const BoxBottomWrapper = styled.View`
flex: 1;
flex-direction: row;
align-items: center;
justify-content: space-between;
`;

export const TextProximoOnibusLabel = styled.Text`
color: #FFFFFF;
font-size: 12px;
font-weight: bold;
`;
export const TextProximoOnibus = styled.Text`
color: #FFFFFF;
font-size: 24px;
font-weight: bold;
`;
export const TextProximoOnibusHoras = styled.Text`
color: #FFFFFF;
font-size: 24px;
`;
export const BtnGrades = styled.TouchableOpacity`
width: 85px;
height: 25px;
background-color: #fff;
align-items: center;
justify-content: center;
border-radius: 20px;
`;

export const TextGrades = styled.Text`
color: #464747;
font-size: 12px;
`;
export const Content = styled.View`
flex: 1;
justify-content: center;
padding-bottom: 20px;
`;
export const ContentTop = styled.View`
width: 354px;
height: 50px;
align-self: center;
flex-direction: row;
align-items: center;
justify-content: space-between;
margin-top: 10px;
`;
export const IconUber = styled.TouchableOpacity`
/* background-color: #fff; */
/* border-radius: 40px; */

`;
export const Icon99 = styled.TouchableOpacity`
background-color: orange;
width: 40px;
height: 40px;
border-radius: 20px;
justify-content: center;
align-items: center;
`;
export const Text99 = styled.Text`
color: #fff;
font-weight: bold;
font-size: 18px;
`;
export const TextChamar = styled.Text`
color: #fff;
font-size: 13px;
`;


export const ContentBottom = styled.View`
width: 354px;
height: 80px;
align-self: center;
flex-direction: row;
align-items: flex-start;
justify-content: space-between;
flex-direction: column;
`;
export const TextInformacoes = styled.Text`
color: #464747;
font-size: 18px;

`;
export const TextMessage = styled.Text`
color: #fff;
font-size: 16px;
height: 17px;
`;