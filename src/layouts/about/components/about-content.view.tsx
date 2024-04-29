import React, { useState, useEffect, useCallback } from 'react';
import {Container} from "@/layouts/generic/container/container";
import {Collapse} from "@/components/collapse/collapse";
import {AboutDataType} from "@/utils/ts/aboutData";
import {getAbouts} from "@/utils/api/api";

export const AboutContentView = ()=>{

    const [data, setData] = useState<Array<AboutDataType>>([])

    useEffect(()=>{
        getAbouts(setData)
    }, [setData])

    return (
      <Container>
          <div className={'about-content'}>
              {data.map(a =>{
                return   <Collapse title={a.title} contentDesc={a.content}/>
              })}
          </div>
      </Container>
    )

}
