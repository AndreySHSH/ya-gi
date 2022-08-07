import {Component} from "react";
import Header from "./header";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {}

    render() {
        return (
            <div className="wrapper">
                <Header/>
            </div>
        )
    }

}


export default App;