import React, { Component } from 'react';

class HolaMundo extends Component {
    render() { 
        return (  
            <React.Fragment>
                <p>Hola desde el componente Hola Mundo</p>
                <p>Soy otro elemento de un mismo nodo</p>
            </React.Fragment>
        );
    }
}
 
export default HolaMundo;