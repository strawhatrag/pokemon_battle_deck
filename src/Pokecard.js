import React, { Component } from "react";
import "./Podecard.css";

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
      <div className="Pokecard">
        <h2 className="Pokecard-title">{this.props.name}</h2>
        <div className="Pokecard-img">
          <img src={imageLink(this.props.id)} alt={this.props.name} />
        </div>
        <div class="Pokecard-data">Type: {this.props.type}</div>
        <div class="Pokecard-data">EXP: {this.props.exp}</div>
      </div>
    );
  }
}

export default Pokecard;
