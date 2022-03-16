class Photos {
    constructor(data, id, name) {
        this._photographerId = data.photographerId
        this._title = data.title
        this._image = data.image
        this._likes = data.likes
        this._date = data.date
        this._price = data.price
        this._id = id
        this._name = name
    }

    get photographerId() {
        return this._photographerId
    }

    get title() {
        return this._title
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
