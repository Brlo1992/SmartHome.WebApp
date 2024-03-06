import React from "react";
import Tip from "./tip";

export default function Tips (props){
const showTips=()=>{
return <ul>
    {props.tips.map(tip=>{
        return <Tip tipp={tip}/>
    })}
</ul>
}

return <div>
            <h3>Porady:</h3>
            {props.tips && props.tips.length ? showTips() : <p>Brak porad</p>}
</div>
}