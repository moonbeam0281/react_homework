import { Component } from "react";

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = { active: "First Page" };
    }

    setActive(link) {
        this.setState({ active: link });
    }

    render() {
        const links = ["First Page", "Second Page", "Third Page"];

        return (
            <nav className="menu">
                {links.map((link) => (
                    <a
                        key={link}
                        href="#"
                        className={this.state.active === link ? "active" : ""}
                        onClick={() => this.setActive(link)}
                    >
                        {link}
                    </a>
                ))}
            </nav>
        );
    }
}

export default Menu;
