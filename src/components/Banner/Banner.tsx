import React from 'react'
import { Dimensions } from 'react-native'
import { publicidades } from '../../services/data'
import * as S from './styled'


const screenSize = Dimensions.get("screen").width
export default function Banner() 
{
    const [activeIndex, setactiveIndex] = React.useState<number>(1)
    function scrollEndHandle(params:any) 
    {
        const index = params.nativeEvent.contentOffset.x/screenSize
        setactiveIndex(index)    
    }
    return (
    <S.BannerContainer>
            <S.FlatListBanner
                horizontal
                showsHorizontalScrollIndicator={false}
                data={publicidades}
                pagingEnabled={true}            
                onMomentumScrollEnd={scrollEndHandle}
                keyExtractor={e=>String(e.img)}
                renderItem={({item})=>(
                  <S.Banner
                    source={{uri:item.img}}
                    />
                )}
              />

            <S.IndicatorContainer>
              {
                publicidades.map((e,i)=>
                <S.Indicator key={i}
                  style={{backgroundColor:i==activeIndex? "#8B4CEF":"#464747"}}
                />)      
              }
            </S.IndicatorContainer>
        </S.BannerContainer>
  )
}