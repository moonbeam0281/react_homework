import { Component } from "react";
import "./UserStyle.css";

export default class UserProfileClass extends Component {
    constructor()
    {
        super();
    }


    render() {
        const { name, age, hobby } = this.props;
        return (
            <div className="card">
                <h3 className="cardTitle">Class Component</h3>
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Age:</strong> {age}</p>
                <p><strong>Hobby:</strong> {hobby}</p>
            </div>
        );
    }
}