import React from "react";

interface Props {
    variant?: "display" | "display-mobile" | "h1" | "h2" | "lead" | "body-lg" | "body-base" | "body-sm" | "body-xsm" | "body-xs" | "body-xxs";
    component?: "h1" | "h2" | "h3" | "h4" | "h5" | "div" | "p" | "span";
    theme?: "primary" | "secondary";
    align?: "left" | "center" | "right";
    className?: String;
    children: React.ReactNode;
}

export const Typography = ({
                               variant = "lead",
                               component: Component = "div",
                               theme = "primary",
                               align = "left",
                               className,
                               children
                           }: Props) => {

    let variantStyles: String = "", colorStyles: String = "", alignStyles: String = "";
// #region **** Variant Font Text ****
    switch (variant) {
        case "display":
            variantStyles = "text-10xl";
            break;
        case "display-mobile":
            variantStyles = "text-9xl";
            break;
        case "h1":
            variantStyles = "text-5xl";
            break;
        case "h2":
            variantStyles = "text-4xl";
            break;
        case "lead":
            variantStyles = "text-xl";
            break;
        case "body-lg":
            variantStyles = "text-lg";
            break;
        case "body-sm":
            variantStyles = "text-sm";
            break;
        case "body-xsm":
            variantStyles = "text-xsm";
            break;
        case "body-xs":
            variantStyles = "text-xs"
            break;
        case "body-xxs":
            variantStyles = "text-xxs"
            break;
    }
// #endregion **** Variant Font Text ****
// #region **** Theme Font color ****
    switch (theme) {
        case "secondary":
            colorStyles = "textSecondaryColor"
            break;
        case "primary":
            colorStyles = "textPrimaryColor"
            break;
    }
// #endregion **** Theme Font color ****
//#region **** Align Font ****
    switch (align) {
        case "left":
            alignStyles = "textLeft"
            break;
        case "center":
            alignStyles = "textCenter"
            break;
        case "right":
            alignStyles = "textRight"
            break;
    }
//#endregion **** Align Font ****
    return (
        <Component
            className={`${variantStyles} ${colorStyles} ${alignStyles} ${className}`}
        >
            {children}
        </Component>
    )
}