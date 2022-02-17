import styled from "styled-components/native";
import { cores } from "../../config/constants";

export const Container = styled.SafeAreaView`
flex: 1;
background-color: ${cores.purple};
/* justify-content: center;
align-items: center; */
`;

export const BannerBig = styled.Image`
width:100%;
height:233px;
`;
export const Content = styled.View`
flex: 1;
`;
export const OptionList = styled.ScrollView`
max-height: 130px;
padding-top:1px;
padding-left:2px;
margin-top:4px;
/* background-color:red; */
`;
export const Box = styled.TouchableOpacity`
width: 116px;
height: 128px;
border-radius:4px;
justify-content: center;
align-items: center; 
background-color:#8B4CEF;
margin:0px 5px;
`;

export const TextTemperature = styled.Text`
font-size: 16px;
color:${cores.white};
font-weight:bold;
`;
export const TextBox = styled.Text`
font-size: 13px;
color:${cores.white};
font-weight:bold;
`;
export const TextTemperatureValue = styled.Text`
font-size: 22px;
color:${cores.white};
font-weight:bold;
`;
export const TextInfo = styled.Text`
font-size: 22px;
color:${cores.white};
font-weight:bold;
margin-left:12px;
margin-top:4px;
margin-bottom:4px;
`;
export const UltimasLinhasContainer = styled.View`
align-items:center;
flex: 1;
`;
export const UltimasLinhas = styled.FlatList`
`;