class Photos {
    constructor(data) {
        this._photographerId = data.photographerId
        this._title = data.title
        this._image = data.image
        this._video = data.video
        this._likes = data.likes
        this._date = data.date
        this._price = data.price
    }

    get photographerId() {
        return this._photographerId
    }

    get title() {
        return this._title
    }


    getMedia(firstName) {
        if(this._image){
            return `<img
                        alt="${this._title}, closeup view"
                        src="../../assets/photographers/${firstName}/${this._image}"
                        style="width:100px"
                    /> `
        } else if(this._video) {
            return `<video controls style="width:100px">
                        <source src="../../assets/photographers/${firstName}/${this._video}" type="video/mp4">
                    </video>`
        }
    }

    get image() {
        return `../../assets/photographers/${this._name}/${this._image}`
    }

    get date() {
        return this._date
    }

    get price() {
        return `${this._price}€/jour`
    }

}
