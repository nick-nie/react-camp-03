function PhotoAlbum(){
    this.photos = [];
    this.currentId = 1;
};

PhotoAlbum.prototype.add = function (photo) {
    photo.id = this.currentId;
    this.photos.push(photo);
    this.currentId++;
}
PhotoAlbum.prototype.getAll = function () {
    return this.photos;
}
PhotoAlbum.prototype.get = function (id) {
    return this.photos[id-1];
}

PhotoAlbum.prototype.remove = function (id) {
    delete this.photos[id-1]
    return;
}
PhotoAlbum.prototype.edit = function(photo){
    if (photo === undefined || photo.id === undefined || photo.url === undefined){
        return false;
    }
    // if (! (photo.id - 1) in this.photos){
    //     return false;
    // }
    this.photos[photo.id-1] = photo;
    return true;
}

PhotoAlbum.prototype.find = function(term){
    const result = [];
    this.photos.forEach((photo) => {
        if(photo.description !== undefined && photo.description.includes(term)){
            result.push(photo);
        }
    });
    return result;
}

export default PhotoAlbum;