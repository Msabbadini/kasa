
import {Container} from "@/layouts/generic/container/container";
import {Carousel} from "@/components/carousel/carousel";
import {useParams} from "react-router-dom";
import {Collapse} from "@/components/collapse/collapse";
import {Tags} from "@/components/tags/tags";
import {Typography} from "@/components/typography/typography";
import useWindowDimension from "@/utils/useWindowDimension";
import {Rating} from "@/components/raiting/raiting";
import {Avatar} from "@/components/avatar/avatar";
import {useEffect, useState} from "react";
import {getHousings} from "@/utils/api/api";

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

export const HousingView = () => {
    const idFiche = useParams().id
    const [data, setData] = useState<Array<any>>([])

    const {width} = useWindowDimension()
    const [dataFiche, setDataFiche] = useState<DataType|null>(null)

    useEffect(() => {
        getHousings(setData)
    }, [])

    useEffect(()=> {
        const fiche = data.filter(d => d.id === idFiche)[0]
        if (fiche) setDataFiche(fiche)
    }, [data])

    if (!idFiche) return null
    if (!dataFiche) return null

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
                        <Rating numberStars={Number.parseInt(dataFiche.rating)} defaultNumber={5}/>

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