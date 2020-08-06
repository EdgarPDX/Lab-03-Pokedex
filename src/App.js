import React, { Component } from 'react'
import './App.css';
import Header from './Header.js'
import request from 'superagent';
import PokemonList from './PokemonList';

export default class App extends Component {
  state = {
    search: '',
    pokeState:[]
  }
  handleChange = (e) => {
    const value = e.target.value
    this.setState({search:value})
  }

  componentDidMount = async () =>{
    const pokemonData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?page=1&perPage=1000&pokemon=${this.state.search}`)
    this.setState({pokeState: pokemonData.body.results})
    console.log(pokemonData.body)
  }
  render() {
    return (
      <>
        <Header />
          <div className="input">
            <input placeholder="Pokemon Name" onChange ={this.handleChange} >
          </input>
          <button onClick = {this.componentDidMount}>Who's that Pokemon</button>
          </div>
        <PokemonList pokemon={this.state.pokeState} />
        <div className="side-bar">

        </div>
          
      </>
    )
  }
}


