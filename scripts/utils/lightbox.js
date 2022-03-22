class lightbox {

    static async init() {
        
        const links = Array.from(document.querySelectorAll('.lightbox__media'));
        const gallery = links.map(link => link.getAttribute("href"));
        links.forEach(link => link.addEventListener("click", e => 
        {
            e.preventDefault()
            console.log(e)
            new lightbox(e.currentTarget.getAttribute('href'), gallery)
        }))
    }

    constructor (url, gallery) {
        let element = this.buildDOM(url)
        this.gallery = gallery
        this.url = url
        this.onKeyUp = this.onKeyUp.bind(this)
        document.addEventListener('keyup', this.onKeyUp)
        const dom = document.querySelector('.lightbox')
        dom.style.display = "block"
    }

    nextLightbox(e){
        e.preventDefault;
        let index = this.gallery.indexOf(this.url) + 1
        this.url = index === this.gallery.length ? this.gallery[0] : this.gallery[index]
        new lightbox(this.url, this.gallery)
        document.removeEventListener('keyup', this.onKeyUp)
    }

    previousLightbox(e){
        e.preventDefault;
        let index = this.gallery.indexOf(this.url) - 1
        this.url = index === -1 ? this.gallery[this.gallery.length-1] : this.gallery[index]
        new lightbox(this.url, this.gallery)
        document.removeEventListener('keyup', this.onKeyUp)
    }

    closeLightbox(e){
        e.preventDefault;
        const dom = document.querySelector('.lightbox')
        dom.style.display = "none";
        document.removeEventListener('keyup', this.onKeyUp)
    }

    onKeyUp(e) {
        console.log("lala")
       if(e.key === 'Escape') {
           this.closeLightbox(e)
       } else if (e.key === 'ArrowLeft') {
           this.previousLightbox(e)
       } else if (e.key === 'ArrowRight') {
           this.nextLightbox(e)
       }
    }


    buildDOM(url) {
        const dom = document.querySelector('.lightbox')
        console.log(dom)
        dom.innerHTML = `
                        <button class="lightbox__close">X</button>
                        <button class="lightbox__next">-></button>
                        <button onclick="" class="lightbox__previous"><-</button>
                        <img src=${url}>
                        `
        dom.querySelector(".lightbox__close").addEventListener('click', this.closeLightbox.bind(this));
        dom.querySelector(".lightbox__next").addEventListener('click', this.nextLightbox.bind(this));
        dom.querySelector(".lightbox__previous").addEventListener('click', this.previousLightbox.bind(this));
        return dom
    }

}


function closeLightbox() {
    const dom = document.querySelector('.lightbox')
    dom.style.display = "none";
    
}


