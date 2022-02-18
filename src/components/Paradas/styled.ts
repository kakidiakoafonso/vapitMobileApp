import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
width: 100%;
height: 66px;
flex-direction: row;
justify-content: space-between;
/* background-color: red; */
`;
export const IconContainer = styled.View`
width: 32px;
height: 32px;
border-radius: 16px;
background-color: #8B4CEF;
align-items: center;
justify-content: center;
`;
export const InfoContainer = styled.View`
width: 90%;
height: 50px;
justify-content: center;
padding-left: 10px;
`;
export const Terminal = styled.Text`
font-size: 16px;
color: #fff;
font-weight: bold;
`;
export const TerminalInfo = styled.Text`
font-size: 16px;
color: #464747;
margin-top: 3px;
`;