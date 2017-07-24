import React, { Component } from 'react';

class PhotoItem extends Component {
    constructor() {
        super();
        this.state = {
            like: 1
        }
    }
    deletePhoto(id){
        this.props.onDelete(id);
    }

    likePhoto(){
        this.setState({
            like: this.state.like + 1
        });
    }

    render () {
        return (
            <a>
                <figure>
                <img src={this.props.photo.url} alt={this.props.photo.description}/>
                </figure>
                <button className = 'button' onClick={this.likePhoto.bind(this)}>Like {this.state.like}</button>
                <button className = 'button' onClick={this.deletePhoto.bind(this, this.props.photo.id)}>Delete</button>
            </a>
        );
    }
}

export default PhotoItem;