import {Dispatch, SetStateAction} from "react";

type HousingProps = Dispatch<SetStateAction<Array<any>>>

export const getHousings = (setData:HousingProps) => {
    fetch(`${process.env.PUBLIC_URL}/data/data.json`)
        .then(res=>res.json())
        .then(res=>setData(res))
}

export const getAbouts =  (setData:HousingProps) => {
    fetch(`${process.env.PUBLIC_URL}/data/about.json`)
        .then(res=>res.json())
        .then(res=>setData(res))
}