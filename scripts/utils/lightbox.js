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
       if(e.key === 'Escape') {
           this.closeLightbox(e)
       } else if (e.key === 'ArrowLeft') {
           this.previousLightbox(e)
       } else if (e.key === 'ArrowRight') {
           this.nextLightbox(e)
       }
    }

    getMedia(url){
        const links = Array.from(document.querySelectorAll('.lightbox__media'));
        links.forEach((link) => {
            if(link.getElementsByTagName('img').length){}
        
            if(link.getAttribute("href") === url){
                title = link.children[0].alt.split(',')[0];
                
            }
        })
    }



    buildDOM(url) {
        const links = Array.from(document.querySelectorAll('.lightbox__media'));
        var title = ""
        var type = ""
        links.forEach((link) => {
            if(link.getAttribute("href") === url){
                if(link.getElementsByTagName('img').length){
                    console.log("img")
                    title = link.children[0].alt.split(',')[0];
                    type = `<figure>
                                <img src=${url}
                                alt="${title}">
                                <figcaption>${title}</figcaption>
                            </figure>`
                } else if (link.getElementsByTagName('video').length){
                    title = link.children[0].children[0].getAttribute("content").split(',')[0]
                    type = `<figure>
                                <video controls preload="metadata" >
                                <source src=${url} type="video/mp4">
                                </video>
                                <figcaption>${title}</figcaption>
                            </figure>`
                }
            }

        
            // if(link.getAttribute("href") === url){
            //     console.log(link.children[0])
            //     console.log(link.children[0].data)
            //     title = link.children[0].alt.split(',')[0];
                
            // }
        })
        const dom = document.querySelector('.lightbox')
        console.log(type)
        dom.innerHTML = `<div class=lightbox__background>
                            <div class="lightbox__diapo">
                            <button class="lightbox__btn lightbox__previous"><i class="fas fa-chevron-left"></i></button>
                            ${type}
                            <div class="flexCol">
                                <button class="lightbox__btn lightbox__close"><i class="fas fa-times"></i></button>
                                <button class="lightbox__btn lightbox__next"><i class="fas fa-chevron-right"></i></button>
                            </div>
                            </div>
                        </div>
                        `
        dom.querySelector(".lightbox__close").addEventListener('click', this.closeLightbox.bind(this));
        dom.querySelector(".lightbox__next").addEventListener('click', this.nextLightbox.bind(this));
        dom.querySelector(".lightbox__previous").addEventListener('click', this.previousLightbox.bind(this));
        return dom
    }

}


