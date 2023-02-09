/*
 *Ejemplo de componente de tipo clase que dispone de los
 * métodos de ciclco de vida
 */

/*  rcfc */
import React, { Component } from "react";

class lifeCycleExample extends Component {
    constructor(props) {
        super(props);
        console.log("CONSTRUCTOR: cuando instancia el componente");
    }

    componentWillMount() {
        console.log("WILLMOUNT: Antes del montaje del componente");
    }

    componentDidMount() {
        console.log(
            "DIDMOUNT: Justo al del montaje del componente, antes del renderizado"
        );
    }

    componentWillReceiveProps(nextProps) {
        console.log("WILLRECEIVEPROPS: Si va a recibir nuevas props");
    }

    shouldComponentUpdate(nextProps, nextState) {
        /*
         *Controlar si el componente debe o no actualizarse
         */
        // return true / false
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("WILLUPDATE: Justo antes de actualizarse");
    }

    componentDidUpdate(prevProps, prevState) {        console.log("DIDUPDATE: Justo despues de actualizarse");
}

    componentWillUnmount() {}

    render() {
        return <div></div>;
    }
}

lifeCycleExample.propTypes = {};

export default lifeCycleExample;
