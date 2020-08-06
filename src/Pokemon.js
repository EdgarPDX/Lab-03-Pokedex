import React, { Component } from 'react'

export default class Pokemon extends Component {
    render() {
        return (
            <>
                <img src={this.props.image} alt={this.props.pokemon}/>
            </>
        )
    }
}
