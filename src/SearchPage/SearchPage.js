import React, { Component } from 'react'
import '../App.css';

import request from 'superagent';
import PokemonList from '../PokemonList.js';
import SearchInput from '../SearchInput.js';

export default class SearchPage extends Component {
  state = {
    search: '',
    searchBy:'pokemon',
    pokeState:[],
    totalPages:1,
    currentPage:1
  }
  makeRequest = async () =>{
    this.setState({ isLoading:true});

    const pokemonData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?page=${this.state.currentPage}&perPage=20&${this.state.searchBy}=${this.state.search}`)
    

    await this.setState({
      pokeState: pokemonData.body.results,
      totatPages: Math.ceil(pokemonData.body.count / 20),
      isLoading: false, 
    })

    const params = new URLSearchParams(this.props.location.search) 
    params.set('search', this.state.search);
    params.set('searchBy', this.state.searchBy);
    params.set('page', this.state.currentPage);

    this.props.history.push('?' + params.toString())
  }
  handleChange = (e) => {
    const value = e.target.value
    this.setState({search:value})
  }
  handleFilterChange = (e) => {
    const type = e.target.value
    this.setState({searchBy: type})
  }
  handleNextClick = async () => {
    await this.setState({currentPage: Number(this.state.currentPage) +1})
    await this.makeRequest();
  }
  handlePrevClick = async () => {
    await this.setState({ currentPage: Number(this.state.currentPage) -1})
    await this.makeRequest();
  }

  handleForm = async (e) => {
    e.preventDefault()
    await this.setState({
      currentPage:1
    })
    await this.makeRequest()
  }

  componentDidMount = async () =>{
    const params = new URLSearchParams(this.props.location.search);
    const searchBy = params.get('searchBy')
    const page = params.get('page')
    const search = params.get('search')

    if (searchBy && page && search) {
      await this.setState({
        searchBy: searchBy,
        currentPage: page,
        search: search
      })
    }
    await this.makeRequest()
    
}
  render() {

    return (
      <>
       
        <SearchInput componentDidMount={this.componentDidMount} handleChange= {this.handleChange} handleFilterChange={this.handleFilterChange} handleNextClick={this.handleNextClick} handlePrevClick={this.handlePrevClick} currentPage={this.currentPage} totalPages={this.totalPages} pokemon={this.state.pokeState} handleForm={this.handleForm} />
        <PokemonList pokemon={this.state.pokeState} />
        
          
      </>
    )
  }
}
