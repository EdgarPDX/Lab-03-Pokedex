import React, { Component } from 'react'

export default class SearchInput extends Component {
    render() {
        return (
            <>
                <div className="input">
            <input placeholder="Pokemon Name" onChange ={this.props.handleChange} >
          </input>
          <button onClick = {this.props.componentDidMount}>Who's that Pokemon</button>
          </div>
            </>
        )
    }
}
