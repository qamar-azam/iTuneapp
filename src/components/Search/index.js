import React, { Component } from 'react';
import axios from 'axios';

import SearchResult from './searchResult';

class Search extends Component {

    constructor( props ){
        super( props );

        this.state = { 
            searchInput: '',   
            favourite: '',                 
            searchResult: false 
        };        

        this.onChange        = this.onChange.bind(this);
        this.handleSubmit    = this.handleSubmit.bind(this);
        this.handleFavourite = this.handleFavourite.bind(this);
    }

    onChange( event ){
        this.setState({ searchInput: event.target.value });
    }

    handleSubmit( event ){
        const term = this.state.searchInput.replace(/ /g, "+");

        if( term ){
            axios.get( ' https://itunes.apple.com/search?term='+term )
            .then( res => {            
                this.setState({ searchResult: res.data.results });            
            });
        }

        event.preventDefault();
    }

    handleFavourite( favouriteAlbum ){        
        this.setState({ favourite: favouriteAlbum });
        localStorage.setItem('favouriteAlbum', JSON.stringify(this.state.favourite) );
    }

    render() {        
        return (
            <div>
                <form 
                    className="searchform"
                    onSubmit={this.handleSubmit} >
                    
                    <input 
                        type="search" 
                        name="search"
                        onChange = { this.onChange }
                        placeholder="Search..."
                        required />

                    <input 
                        type="submit" 
                        value="Search" />
                </form>

                { this.state.searchResult !== false &&
                    
                    <SearchResult 
                        results={this.state.searchResult}                          
                        onHandleFavourite={this.handleFavourite} />
                }
                
                
            </div>
        );
    }
}

export default Search;