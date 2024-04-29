import {Container} from "@/ui/components/container/container";
import {Card} from "@/ui/ui_toolkit/card/card";
import data from "@/api/data.json"

export const ContentView = () => {



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