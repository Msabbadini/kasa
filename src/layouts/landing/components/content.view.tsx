import {useState, useEffect} from "react";

import {Container} from "@/layouts/generic/container/container";
import {Card} from "@/components/card/card";
import {getHousings} from "@/utils/api/api";

export const ContentView = () => {

    const [data, setData] = useState<Array<any>>([])

    useEffect(() => {
        getHousings(setData)
    }, [])

    return (
        <Container>
            <div className={'content gallery'}>
                {data.map(d=>{
                    return <Card nameCard={d.title} key={d.id} imgCard={d.cover}  idCard={d.id}/>
                })}

            </div>
        </Container>
    )
}