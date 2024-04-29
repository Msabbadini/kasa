import useWindowDimensions from "@/utils/useWindowDimension";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import {Typography} from "@/components/typography/typography";
import {Container} from "@/layouts/generic/container/container";
import {Banner} from "@/components/banner/banner";
// @ts-ignore
export const HeroTopview =()=>{
    const {width} = useWindowDimensions()
   
   return (
       <Container>
           <Banner type={'landing'}/>
       </Container>
   )
}




