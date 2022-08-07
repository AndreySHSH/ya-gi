import {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import background from "../img/bg-top.jpg";


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {}

    render() {
        return (
            <header style={{ backgroundImage: `url(${background})`, backgroundSize: "100%" }}>
                <div className="info">
                    <div className="container">
                        <div className="number">
                            <FontAwesomeIcon icon="fa-solid fa-phone" />
                            <span className="orange-color">+7(981)-877-58-24</span>
                        </div>
                    </div>
                </div>
            </header>
        )
    }

}

export default Header;