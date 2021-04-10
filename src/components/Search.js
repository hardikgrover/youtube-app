import React, { Component } from 'react'

export class Search extends Component {
    state = {term: ''};

    onInputChange = (event)=>{
        this.setState({term:event.target.value});

    }
    onFormSubmit = event =>{
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }
    render() {
        // console.log(this.props.name);
        // console.log(this.state.term)
        return (
            <div className="search-bar ui segment">
                    <form
                    onSubmit={this.onFormSubmit} 
                    className="ui form">
                        <div className="field">
                            <label>Video Searh</label>
                            <input 
                            
                            type="text" 
                            value={this.state.term}
                            onChange={this.onInputChange}
                            ></input>
                        </div>
                    </form>
                
            </div>
        )
    }
}

export default Search
