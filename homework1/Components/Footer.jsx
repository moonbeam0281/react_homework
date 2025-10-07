import { Component } from "react";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = { time: new Date() };
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({ time: new Date() });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <footer className="footer">
                <small>
                    Time : {this.state.time.getFullYear()} — {this.state.time.toLocaleTimeString()}
                </small>
            </footer>
        );
    }
}

export default Footer;