import { Component } from "react";

export default class OddCounter extends Component {

    constructor() {
        super();
        this.state = { oddNumb: 1 };
    }

    nextOddNumb = () => {
        this.setState(prev => ({
            oddNumb: prev.oddNumb + 2
        }));
    };

    render() {
        const myStyle = {
            width: "150px",
            height: "50px"
        }
        const textStyle = {
            fontSize: "40px"
        }
        return (
            <div className="box">
                <h1>Odd Numbers</h1>
                <h2 style={textStyle}>{this.state.oddNumb}</h2>
                <button style={myStyle} onClick={this.nextOddNumb}>Next Odd Number</button>
            </div>
        )
    }
}