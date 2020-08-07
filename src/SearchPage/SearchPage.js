import React, { Component } from 'react'
import '../App.css';

import request from 'superagent';
import PokemonList from '../PokemonList.js';
import SearchInput from '../SearchInput.js';

export default class SearchPage extends Component {
  state = {
    search: '',
    searchBy:'pokemon',
    pokeState:[]
  }
  handleChange = (e) => {
    const value = e.target.value
    this.setState({search:value})
  }
  handleFilterChange = (e) => {
    const type = e.target.value
    this.setState({searchBy: type})
  }

  componentDidMount = async () =>{
    const pokemonData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?page=1&perPage=1000&${this.state.searchBy}=${this.state.search}`)
    this.setState({pokeState: pokemonData.body.results})
    
  }
  render() {

    return (
      <>
       
        <SearchInput componentDidMount={this.componentDidMount} handleChange= {this.handleChange} handleFilterChange={this.handleFilterChange} />
        <PokemonList pokemon={this.state.pokeState} />
        <div className="side-bar">

        </div>
          
      </>
    )
  }
}
