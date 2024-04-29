import {useState} from "react";
import {Typography} from "@/ui/ui_toolkit/typography/typography";
// @ts-ignore
import ArrowRight from "@/assets/chevron_carousel_right.png"
import clsx from "clsx";
import useWindowDimension from "@/utils/useWindowDimension";

interface Props {
    title: String,
    contentArray?: Array<String>
    contentDesc?: String
}

export const Collapse = ({title, contentArray, contentDesc}: Props) => {
    const [toggle, setToggle] = useState(false)
    const {width} = useWindowDimension()
    return (
        <>
            <div className={"collapse"}>
                <div className={"collapse-header"} onClick={() => setToggle(!toggle)}>
                    <Typography theme={'secondary'} component={"h3"} variant={width > 769 ? "body-lg":"body-xsm"}>
                        {title}
                    </Typography>
                    <img
                        className={clsx("arrow",toggle ? "arrow-up" : "arrow-down")}
                        src={ArrowRight}
                        alt={"voir le contenu"}
                    />
                </div>

                <div className={clsx(toggle ? "showContent" : "hiddenContent")}>
                    {contentArray && contentArray.map(item => {
                        return (
                            <Typography variant={width > 769 ? "body-lg": "body-xs"} component={"p"}>{item}</Typography>
                        )
                    })}
                    {contentDesc && <Typography variant={width > 769 ? "body-lg": "body-xs"} component={"p"}>{contentDesc}</Typography>}
                </div>
            </div>
        </>
    )
}