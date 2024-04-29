import {Banner} from "@/ui/ui_toolkit/banner/banner";
import {Container} from "@/ui/components/container/container";
import {Carousel} from "@/ui/ui_toolkit/carousel/carousel";
import {useParams} from "react-router-dom";
import data from "@/api/data.json"
import {Collapse} from "@/ui/ui_toolkit/collapse/collapse";
import {Tags} from "@/ui/ui_toolkit/tags/tags";
import {Typography} from "@/ui/ui_toolkit/typography/typography";
import useWindowDimension from "@/utils/useWindowDimension";
import {Rating} from "@/ui/ui_toolkit/raiting/raiting";
import {Avatar} from "@/ui/ui_toolkit/avatar/avatar";

interface DataType {
    pictures: Array<string>
    tags: Array<string>
    title: string
    location: string
    description: string
    equipments: Array<string>
    host: HostType
    rating: string
}

interface HostType {
    picture: string
    name: string
}

export const LodgeView = () => {
    const {width} = useWindowDimension()
    const idFiche = useParams().id
    const dataFiche: DataType = data.filter(d => d.id === idFiche)[0]
    return (
        <Container>
            <div className={'fiche-content'}>
                <Carousel images={dataFiche.pictures}/>
                <div className={"fiche-header"}>
                    <div className={"fiche-header_left"}>
                        <Typography component={"h2"}
                                    variant={width > 769 ? "h2" : "body-lg"}>{dataFiche.title}</Typography>
                        <Typography component={"p"}
                                    variant={width > 769 ? 'body-lg' : 'body-sm'}>{dataFiche.location}</Typography>
                        <div className={"fiche-tags"}>
                            {dataFiche.tags.map(tag => {
                                return <Tags key={tag} nameTag={tag}/>
                            })}
                        </div>
                    </div>
                    <div className={"fiche-header_right"}>
                        <div className={"contact"}>
                            <div className={"contact_name"}>
                                <Typography component={"p"}
                                            variant={width > 769 ? "body-lg" : "body-sm"}>{dataFiche.host.name.split(" ")[0]}</Typography>
                                <Typography component={"p"}
                                            variant={width > 769 ? "body-lg" : "body-sm"}>{dataFiche.host.name.split(" ")[1]}</Typography>
                            </div>

                            <Avatar size={width > 769 ? "medium" : "small"} src={dataFiche.host.picture}
                                    alt={dataFiche.host.name}/>
                        </div>
                        <Rating numberStars={parseInt(dataFiche.rating)} defaultNumber={5}/>

                    </div>
                </div>
                <div className={"fiche-collapse"}>
                    <div className={"fiche-collapse_item"}>
                        <Collapse title={"Description"} contentDesc={dataFiche.description}/>
                    </div>
                    <div className={"fiche-collapse_item"}>
                        <Collapse title={"Équipements"} contentArray={dataFiche.equipments}/>
                    </div>
                </div>
            </div>
        </Container>
    )
}