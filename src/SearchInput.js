import React, { Component } from 'react'


export default class SearchInput extends Component {
    render() {
        return (
            <>
                <div className="input">
            <input placeholder="Pokemon Name" onChange ={this.props.handleChange} >
          </input>
          <select onChange={this.props.handleFilterChange}>
              <option value='pokemon'>Name</option>
              <option value='type'>Type</option>
              <option value='attack'>Attack</option>
              <option value='defense'>Defense</option>
          </select>
          <button onClick = {this.props.componentDidMount}>Who's that Pokemon</button>
          
          </div>
            </>
        )
    }
}
