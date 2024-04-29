import useWindowDimensions from "@/utils/useWindowDimension";
import {useLocation} from "react-router-dom";
import clsx from "clsx";
import {useEffect} from "react";
import {Typography} from "@/ui/ui_toolkit/typography/typography";
import {Container} from "@/ui/components/container/container";
import {Banner} from "@/ui/ui_toolkit/banner/banner";
// @ts-ignore
export const HeroTopview =()=>{
    const {width} = useWindowDimensions()
   
   return (
       <Container>
           <Banner type={'landing'}/>
       </Container>
   )
}




