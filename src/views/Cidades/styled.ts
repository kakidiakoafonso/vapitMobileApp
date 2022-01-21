import styled from "styled-components/native";
import { cores } from "../../config/constants";
import {Platform} from 'react-native'

const ios = Platform.OS==="ios"
export const Container = styled.SafeAreaView`
flex: 1;
background-color: ${cores.purple};
align-items: flex-end;
justify-content: flex-end;
`;
export const Logo = styled.Image`
width: 41px;
height: 40px;
align-self: flex-end;
position: absolute;
top: ${ios? '30px':'30px'};
right: 20px;
`;
export const FlatListContainer = styled.View`
width: 90%;
height: 96%;
align-self: center;
`;
export const FlatList = styled.FlatList`
width: 100%;
height: 100%;
align-self: center;
`;