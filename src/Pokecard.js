import React, { Component } from "react";

const POKE_API_IMG =
  "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

function imageLink(id) {
  const getID = String(id).padStart(3, "0");
  const imgUrl = POKE_API_IMG + getID + ".png";
  return imgUrl;
}

class Pokecard extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <img src={imageLink(this.props.id)} alt={this.props.name} />
        <p>Type: {this.props.type}</p>
        <p>EXP: {this.props.exp}</p>
      </div>
    );
  }
}

export default Pokecard;
