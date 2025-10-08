import { Component } from "react";

class MyClassComp extends Component {

    constructor() {
        super();
        this.state = { buttonShow: true }

    }

    componentDidMount() {
        console.log("Component mounted");
    }

    componentDidUpdate() {
        console.log("Comp updated!");
    }

    componentWillUnmount() {
        console.log("Comp destroyed");
    }

    showHide() {
        this.state.buttonShow = {buttonShow: !this.state.buttonShow}
    }

    render() {
        return (
            <div>
                <button onClick={this.showHide()} >{this.state.buttonShow ? "Hide" : "Show"}</button>
                <h3>Class components are powerful!</h3>
                {this.state.buttonShow? <h2>Hello world</h2> : null};
            </div>

        )
    }
}

export default MyClassComp;