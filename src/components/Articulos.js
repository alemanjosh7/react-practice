import React, { Component } from "react";
import axios from 'axios';

class Articulos extends Component {
  state = {
    titulo: "Articulos"
  };

  componentDidMount() {
    axios.get('https://supermercado-devf.herokuapp.com/docs')

  }

  render() {
    return <h3> {this.state.titulo}</h3>;
  }
}

export default Articulos;