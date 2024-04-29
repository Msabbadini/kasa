import clsx from "clsx";
import React from "react";

interface Props {
    children: React.ReactNode;
    className?: string;

}
export const Container =({children,className}: Props)=>{

    return(
        <div className={clsx(className,'container')}>
            {children}
        </div>
    )
}