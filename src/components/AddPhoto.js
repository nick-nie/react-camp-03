import React, { Component } from 'react';
class AddPhoto extends Component {
    constructor(){
        super();
        this.state = {
            newPhoto:{}
        }
    }
    handleSubmit(e){
        this.refs.url.value === ''? alert('Url is required') : this.refs.description.value === '' ? alert('Description is required') :
        this.setState({newPhoto:{
            url: this.refs.url.value,
            description: this.refs.description.value
        }}, function(){
            this.props.addPhoto(this.state.newPhoto);
        });
        this.refs.url.value = '';
        this.refs.description.value = '';
        e.preventDefault();
    }

    render () {
        return (
            <div>
                <h3>Photo Gallery</h3>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <label>Url</label> <br />
                        <input type='text' ref='url'/>
                    </div>
                    <div>
                        <label>Description</label> <br />
                        <input type='text' ref='description'/>
                    </div>
                    <br />
                    <button className="button" type="submit">Add</button>
                </form>
                <br />
            </div>
        );
    }
}

export default AddPhoto;