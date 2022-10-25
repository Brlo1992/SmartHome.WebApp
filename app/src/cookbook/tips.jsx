import React from "react";
import Tip from "./tip";
export default class Tips extends React.Component {
    render() {

        return <div>
            <h3>Porady:</h3>
            {this.props.tips && this.props.tips.length ? this.showTips() : <p>Brak porad</p>}
        </div>
    }
    showTips() {
        return <ul>
            {this.props.tips.map(tip => {
                return <Tip tipp={tip} />
            })}
        </ul>;
    }
}
