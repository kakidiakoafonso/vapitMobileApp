import styled from "styled-components/native";
import { cores } from "../../config/constants";

export const Container = styled.SafeAreaView`
flex: 1;
background-color: ${cores.primary60};
justify-content: center;
align-items: center;
`;

export const TopContainer = styled.View`
width: 350px;
height: 60px;
/* background-color: aqua; */
position: absolute;
top: 30px;
justify-content: space-evenly;

`;
export const Slogan = styled.Text`
width: 270px;
height: 39px;
font-size: 34px;
color: ${cores.white};
`;
export const Logo = styled.Image`
width: 40px;
height: 41px;
position: absolute;
right: 0px;
`;

export const Select = styled.TouchableOpacity`
width: 90%;
height: 55px;
background-color: ${cores.pink};
align-items: center;
justify-content: space-between;
flex-direction: row;
padding: 0px 10px;
margin-bottom: 10%;
`;
export const SelectResult = styled.View`
width: 356px;
height: 145px;
background-color: ${cores.white};
position: absolute;
top: 45px;
`;
export const FlatList = styled.FlatList`
width: 100%;
height: 100%;
`;
export const SelectItem = styled.View`
width: 100%;
height: 60px;
background-color: red;
`;


export const TextSelect = styled.Text`
font-size: 18px;
font-weight: bold;
text-align: center;
color: ${cores.white};
`;
export const TextTour = styled.Text`
width: 277px;
height: 70px;
font-size: 18px;
text-align: center;
color: ${cores.white};
`;
