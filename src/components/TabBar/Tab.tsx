import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import React,{useState} from 'react'
import * as S from './styled'
import { AntDesign ,FontAwesome5} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const ICON_SIZE = 30
type Props = BottomTabBarProps
export default function Tab({state}:Props) 
{
const nav = useNavigation()
const [selected, setselected] = useState<string>('Home')
const renderColor = (currentTab:string):string => (currentTab===selected? "#5037E9":"#fff")
const renderIconColor = (currentTab:string):string => (currentTab===selected? "#fff":"#adadb9")
const handleClick = (nextTab:string) =>
{
    if(nextTab===selected) return
    else {
        nav.navigate(nextTab)
        setselected(nextTab)
    }
}
  return (
    <S.Container>
        {
            state.routes.map((route)=>
            <S.Buttons onPress={()=>handleClick(route.name)} 
                style={{backgroundColor:renderColor(route.name)}} 
                activeOpacity={0.7}>
                {route.name === "Home" && <AntDesign name="home" size={ICON_SIZE} color={renderIconColor(route.name)} />}
                {route.name === "Linhas" && <FontAwesome5 name="bus" size={ICON_SIZE} color={renderIconColor(route.name)}  />}
            </S.Buttons>)
        }
    </S.Container>
  )
}