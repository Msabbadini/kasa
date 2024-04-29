import {useState} from "react";
import {Typography} from "@/components/typography/typography";
import useWindowDimension from "@/utils/useWindowDimension";
const ArrowRight =  `${process.env.PUBLIC_URL}/assets/chevron_carousel_right.png`;

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
                        className={`arrow ${toggle ? "arrow-up" : "arrow-down"}`}
                        src={ArrowRight}
                        alt={"voir le contenu"}
                    />
                </div>

                <div className={`${toggle ? "showContent" : "hiddenContent"}`}>
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