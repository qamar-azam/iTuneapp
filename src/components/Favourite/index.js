import React, { Component } from 'react';
import _ from 'lodash';


class Favourite extends Component {

    constructor( props ){
        super( props ); 

        const favouriteAlbum = JSON.parse( localStorage.getItem('favouriteAlbum') );
        
        this.state = { favouriteAlbum:  favouriteAlbum };

        this.handleClick = this.handleClick.bind(this);  
    }

    handleClick( album ){
        let favourites = this.state.favouriteAlbum;

        if ( _.includes(this.state.favouriteAlbum, album )){
            favourites = _.without(favourites, album);
        }

        this.setState({ favouriteAlbum: favourites });        
        localStorage.setItem('favouriteAlbum', JSON.stringify( favourites ));
    }

    render() {   
        let favouriteAlbum = null;
        let listItems = null;

        favouriteAlbum = this.state.favouriteAlbum;        
        
        if( favouriteAlbum ){

            listItems = favouriteAlbum.map( ( result, count ) =>
                <li key={ count }>
                    <div className="artwork-image">
                        <img src={result.artworkUrl100} alt="" />
                    </div>

                    <div className="album-name">
                        <a href={result.collectionViewUrl} target="_blank" >{ result.collectionName }</a>
                    </div>

                    <p className="price">{result.currency} {result.collectionPrice}</p>

                    <button onClick={ () => this.handleClick(result) }>Remove</button>

                </li>
            );   

        }     

        return (            
            <div className="favourite">
                <h3>Favourites</h3>

                <ul className="album-list">
                    {listItems}          
                </ul> 
            </div>
        );
    }
}

export default Favourite;
