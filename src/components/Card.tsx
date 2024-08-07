import { Button } from "react-bootstrap"
import { CardType } from "./model/type"

interface Props {
    card : CardType
}


export default function Card ({card}:Props){
              
    return (  
        
        <div className="card__wrapper">
            <div className="card container-fluid">
                {card.image ? <img src={card.image}/> : ""}
                <h2 className="card__title text-start mt-1">Card Title</h2>
                <span className="text-start">{card.title}</span>
                <Button variant="primary col-md-6 mt-3">Go somewhere</Button>
            </div>
        </div>
        
    )
}
