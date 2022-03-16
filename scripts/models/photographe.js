class photographer {
    constructor(data) {
        this._name = data.name
        this._city = data.city
        this._country = data.country
        this._tagline = data.tagline
        this._portrait = data.portrait
        this._id = data.id
        this._price = data.price
    }

    get name() {
        return this._name
    }

    get city() {
        return this._city
    }

    get portrait() {
        return `../../assets/photographers/id/${this._portrait}`
    }

    get country() {
        return this._country
    }

    get tagline() {
        return this._tagline
    }

    get id() {
        return this._id
    }

    get price() {
        return `${this._price}€/jour`
    }

    get firstname() {
        const str = this._name;
        const name = str.split(' ');
        this._firstname = name[0]
        return this._firstname;
    }
}
