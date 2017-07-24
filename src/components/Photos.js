import React, { Component } from 'react';
import PhotoItem from './PhotoItem';
class Photos extends Component {
    deletePhoto(id){
        this.props.onDelete(id);
    }
    
    render (props) {
        let photoItems;
        if(this.props.photos){
            photoItems = this.props.photos.map(photo=> {
                return (                
                   <PhotoItem onDelete={this.deletePhoto.bind(this)} key={photo.id} photo={photo} />     
                );
            });
        }

        return (
            <div className="Photos">
                {photoItems}
            </div>
        );
    }
}

export default Photos;