import {Typography} from "@/ui/ui_toolkit/typography/typography";
import useWindowDimension from "@/utils/useWindowDimension";

interface Props {
    nameTag: String
}
export const Tags = ({nameTag}:Props)=>{
    const {width} = useWindowDimension()

    return (
        <div className={'tags'}>
            <Typography variant={width > 769 ? 'body-sm':'body-xxs'} theme={"secondary"} component={"p"} align={"center"}>{nameTag}</Typography>
        </div>
    )
}