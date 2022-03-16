class photographerBande {
    constructor(user) {
        this.user = user
    }

    createUserCard() {
        const $wrapper = document.createElement('article')
        $wrapper.classList.add('lala')

        const userCard = `
            <div class="photograph-header">
                <div>
                    <h1>${this.user.name}</h1>
                    <p>${this.user.city}</p>
                    <p>${this.user.tagline}</p>
                </div>
                
                <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
                <img style="width: 100px" alt="${this.user.name}"
                    src="${this.user.portrait}"
                />
                <img src="../../assets/photographers/${this.user.firstname}/Animals_Rainbow.jpg" class="logo" alt="Fisheye Home page"/>
            </div>
        `
        
        $wrapper.innerHTML = userCard
        return $wrapper
    }

}
