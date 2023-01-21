import React, { Component, createContext } from "react";

// Provider and Consumer are connected through their "parent" context
const { Provider, Consumer } = createContext();

// Provider will be exported wrapped in ConfigProvider component.
class ConfigProvider extends Component { 

    constructor(props) {  
        super(props);
        this.state = props.value;
    }

    render() {
        return (
            <Provider
                value={this.state}
                >
                {this.props.children}
            </Provider>
        );
    }
}

export { ConfigProvider };

// I make this default since it will probably be exported most often.
export default Consumer;