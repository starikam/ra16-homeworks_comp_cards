import Card from "./Card"
import { CardType } from "./model/type"
import {v4 } from "uuid"

interface Props {
    list : CardType[]
}


export default function RenderCard ({list}:Props){

    return (  
        
        <div className="card__wrapper">
            <div className="card container-fluid">
            {list.map( (el) => {return (<Card card={el} key={v4()}/>)})}
            </div>
        </div>
        
    )
}