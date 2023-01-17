import React, { Component } from "react";
import PropTypes from "prop-types";

//? rcc Esto es como antiguamente se trabajaba en React js con tipo clase

class Greeting extends Component {
    constructor(props) {
        super(props);
        this.state = { age: 29 };
    }

    render() {
        return (
            <div>
                <h1>¡Hola, {this.props.name}!</h1>
                <h2>Tienes {this.state.age} </h2>
                <button onClick={this.birthday}>asd</button>
            </div>
        );
    }

    birthday = () => {
        this.setState((prevState) => ({
            age: prevState.age + 1,
        }));
    };
}

Greeting.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
};

export default Greeting;
