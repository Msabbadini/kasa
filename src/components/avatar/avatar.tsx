import React from "react";

interface Props {
    size?: "small" | "medium" ;
    src: string;
    alt: string;
}
export const Avatar = ({size = "medium", src, alt} : Props)=>{
    let sizeStyles: string;

    switch (size) {
        case "small":
            sizeStyles="small";
            break;
        case "medium": //Default
            sizeStyles="medium";
            break;
    }
    return (
        <div className={`${sizeStyles} avatar`}>
            <img
                src={src}
                alt={alt}
            />
        </div>
    )
}