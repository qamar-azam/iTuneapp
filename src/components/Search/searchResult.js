import React, { Component } from 'react';
import _ from 'lodash';

class SearchResult extends Component {

    constructor( props ){
        super( props ); 

        this.state = { isFavorite:  [] };     
        this.addToFavorite = this.addToFavorite.bind(this);        
    }

    addToFavorite(event, album ){
        let favorites = this.state.isFavorite;

        if (event.target.checked === false && _.includes(this.state.isFavorite, album ))
            favorites = _.without(favorites, album);
        else
            favorites.push(album);
        this.setState({ isFavorite: favorites });

        this.props.onHandleFavourite( this.state.isFavorite );        
    }

    render() {
        const listItems = this.props.results.map( ( album, count ) =>
            <li key={ count }>
                <div className="artwork-image">
                    <img src={album.artworkUrl100} alt="" />
                </div>

                <div className="album-name">
                    <a href={album.collectionViewUrl} target="_blank" >{ album.collectionName }</a>
                </div>

                <p className="price">{album.currency} {album.collectionPrice}</p>

                <label htmlFor={album.trackId} className="add-to-favourite">
                    <input 
                        type="checkbox" 
                        id={album.trackId}
                        name="isFavorite"
                        ref={album.trackId}
                        checked={_.includes(this.state.isFavorite, album )}
                        onChange={(e) => this.addToFavorite(e, album)}
                        />
                    Add to favourite
                </label>
            </li>
        );


        return (            
            <div className="searchResult">
                <h3>Search Result</h3>
                <ul className="album-list">  
                    {listItems}
                </ul>      
            </div>
        );
    }
}

export default SearchResult;