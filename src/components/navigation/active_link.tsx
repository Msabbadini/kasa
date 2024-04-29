import React from "react";
import {useMemo} from "react";

import {Typography} from "@/components/typography/typography";
import {NavLink} from "react-router-dom";
interface Props {
    href: string;
    nameRoute: string;
}
export const ActiveLink = ({href,nameRoute} : Props) => {
    const pathname=''
    const isActive = useMemo(()=>{
        return pathname === href
    },[pathname,href])

    return (
        <NavLink
            to={href}
            className={({isActive}: any) => (isActive ? "textPrimaryColor isActive" : "textPrimaryColor")}
        >
                {nameRoute}
        </NavLink>
    )

}