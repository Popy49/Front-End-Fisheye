class PhotosList {
    constructor(photo, x) {
        this.photo = photo
        this.x = x
    }

    createPhotoList() {
        const $wrapper = document.createElement('article')
        $wrapper.classList.add('lala')

        const userCard = `
            <div class="grid__element">
                <a><img
                    alt="${this.photo.title}, closeup view"
                    src="../../assets/photographers/${this.x}/${this.photo.image}"
                    style="width:100px"
                    /> 
                </a>
                <div>
                    <h1>${this.photo.title}</h1>
                    <p>${this.photo.likes} ♥</p>
                    <p>${this.x} ♥</p>
                </div>
            </div>
        `
        
        $wrapper.innerHTML = userCard
        return $wrapper
    }

}
