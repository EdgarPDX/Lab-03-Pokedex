import React, { Component } from 'react'
import request from 'superagent'
import '../Details.css';


export default class DetailPage extends Component {
    state = {pokemon: null}

    componentDidMount = async () =>  {
        const name = this.props.match.params.myPokemonId
        const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${name}`);
        const pokemon =data.body.results[0];
        this.setState({pokemon: pokemon})
    }
    render() {
        const { pokemon } = this.state;
        return (
            <div>
                {  pokemon
                    ?<div className="poke-container">
                        <div className="poke-stats"><p className="name">{pokemon.pokemon}</p>
                        <p>Attack: {pokemon.attack}</p>
                        <p>Defense: {pokemon.defense}</p>
                        </div> 
                        <div>
                            <img className="pokemon-detail"src={pokemon.url_image} alt={pokemon.pokemon}/>
                        </div>
                    
                    

                    </div> 
                    : <h1>Loading</h1>
                }
                
            </div>
        )
    }
}
