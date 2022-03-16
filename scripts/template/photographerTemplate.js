class photographerCard {
    constructor(user) {
        this.user = user
    }

    createUserCard() {
        const $wrapper = document.createElement('article')
        $wrapper.classList.add('lala')

        const userCard = `
            <a href="photographer.html#${this.user.id}" onclick="saveId(${this.user.id})">
                <img
                    src="${this.user.portrait}"
                />
            <h2>${this.user.name}</h2>
            </a>
            <p>${this.user.city}</p>
            <p>${this.user.tagline}</p>
            <p>${this.user.price}</p>
        `
        
        $wrapper.innerHTML = userCard
        return $wrapper
    }

}

function saveId(id){
    localStorage.setItem("id", id);
}