import React, { Component } from 'react';
import Photos from './components/Photos';
import AddPhoto from './components/AddPhoto';
import PhotoAlbum from './model/PhotoAlbum';

const store = new PhotoAlbum();
class App extends Component {
    constructor(){
        super();
        this.state = {
            photos: []
        }
    }
    componentWillMount(){
        this.initialPhotoStore();
    }
    initialPhotoStore(){
        store.add(
                {
                    url: "https://images-na.ssl-images-amazon.com/images/I/81EXbbAM0RL._UR150,200_FMJPG_.jpg",
                    description: 'Boss Baby'
                }
        );
        store.add(
                {
                    url: "https://images-na.ssl-images-amazon.com/images/I/916pg6wQ5HL._UR150,200_FMJPG_.jpg",
                    description: 'The Lego Batman'
                }
        );
        store.add(
                {
                    url: "https://images-na.ssl-images-amazon.com/images/I/815g7Lg09-L._UR150,200_FMJPG_.jpg",
                    description: 'The Fate of The Furious'
                }
        );
        this.setState({photos: store.getAll()});
    }

    handleAddPhoto(photo){
        store.add(photo);
        this.setState({photos: store.getAll()});
    }

    handleDeletePhoto(id){
        store.remove(id);
        this.setState({photos: store.getAll()});
    }
    render () {
        return (
            <div className="App">
                <AddPhoto addPhoto={this.handleAddPhoto.bind(this)}/>
                <Photos photos={this.state.photos} onDelete={this.handleDeletePhoto.bind(this)}/>
            </div>
        );
    }
}

export default App;