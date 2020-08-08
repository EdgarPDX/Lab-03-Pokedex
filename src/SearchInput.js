import React, { Component } from 'react'


export default class SearchInput extends Component {
    render() {
        const {
            totalPages,
            handleNextClick,
            handlePrevClick,
            currentPage,
            handleForm,
            handleChange,
            handleFilterChange,
            componentDidMount 
        } = this.props;
        return (
            <>
                <div className="input">
                    <form onSubmit={handleForm}>
                    <input placeholder="Pokemon Name" onChange ={handleChange} >
                    </input>
                    <select onChange={handleFilterChange}>
                        <option value='pokemon'>Name</option>
                        <option value='type'>Type</option>
                        <option value='attack'>Attack</option>
                        <option value='defense'>Defense</option>
                    </select>
                    <button onClick = {componentDidMount}>Who's that Pokemon</button>
                    </form>
                    
                </div>
                <div className="next-prev">
                    {
                        this.props.pokemon.length > 0 &&
                        <div>
                            { Number(currentPage) !== 1 && <button onClick ={handlePrevClick}>PREV PAGE</button>} 
                            { Number(currentPage) !== Number(totalPages) && <button onClick = {handleNextClick}>NEXT PAGE</button>
                            } <span>{currentPage} of {totalPages}</span>
                        </div>
                    }
                </div>
                    
                    
                    
                
            </>
        )
    }
}
