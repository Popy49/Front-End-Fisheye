class Api {
    /**
     * 
     * @param {string} url 
     */
    constructor(url) {
        this.url = url
    }

    async get() {
        return fetch(this.url)
            .then(res => res.json())
            .then(function(value) {
                console.log(value);
                return value;
              })
            .catch(err => console.log('an error occurs', err))
    }
}


class UserApi extends Api {
    /**
     * 
     * @param {string} url 
     */
    constructor(url) {
        super(url)
    }

    async getUsers() {
        return await this.get()
    }
}
