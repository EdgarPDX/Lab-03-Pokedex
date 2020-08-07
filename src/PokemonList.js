import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class PokemonList extends Component {
    render() {

      
        return (
            <ul> 
                {this.props.pokemon.map((poke) =>(
                    <li key={poke.id}>
                        <span>{poke.pokemon}</span>
                        <Link to={`/detail/${poke.pokemon}`}>
                        <img className="pokemon"src={poke.url_image} alt={poke.pokemon}/></Link>
                    </li>
                ))}
                
                
            </ul>
        )
    }
}
