import {AboutData} from "@/ui/modules/about-page/data/about-data";
import {Container} from "@/ui/components/container/container";
import {Collapse} from "@/ui/ui_toolkit/collapse/collapse";
export const AboutContentView = ()=>{

    return (
      <Container>
          <div className={'about-content'}>
              {AboutData.map(a =>{
                return   <Collapse title={a.title} contentDesc={a.content}/>
              })}
          </div>
      </Container>
    )

}