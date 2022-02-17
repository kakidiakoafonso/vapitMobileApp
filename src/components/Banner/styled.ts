import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { cores } from "../../config/constants";


const IMAGE_SIZE = Dimensions.get("screen").width

export const BannerContainer = styled.View`
width: 100%;
height: 155px;
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