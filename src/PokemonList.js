import React, { Component } from 'react'


export default class PokemonList extends Component {
    render() {
        return (
            <ul>
                {this.props.pokemon.map((poke) =>(
                    <li key={poke.id}>
                        <span>{poke.pokemon}</span>
                        <img className="pokemon"src={poke.url_image} alt={poke.pokemon}/>
                    
                    </li>
                ))}
                
                
            </ul>
        )
    }
}
