import styled from "styled-components/native";
import { cores } from "../../config/constants";

export const Container = styled.TouchableOpacity`
width: 353px;
height: 45px;
background-color: ${props=> props.color};
border-radius: 3px;
justify-content: center;
align-items: center;
`;
export const Text = styled.Text`
/* width: 74px; */
height: 21px;
font-size: 18px;
color: ${cores.white};
font-weight: bold;
`;
export const IconContainer = styled.View`
position: absolute;
right: 15px;
`;


export const ButtonPular = styled.TouchableOpacity`
width: 120px;
height: 32px;
font-size: 18px;
justify-content: center;
align-items: center;
`;
export const TextPular = styled.Text`
font-size: 18px;
color: ${cores.white};
`;