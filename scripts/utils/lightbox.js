class lightbox {

    static async init() {
        const links = document.querySelectorAll('.lightbox__media');
        links.forEach(link => link.addEventListener("click", e => 
        {
            e.preventDefault()
            new lightbox(e.currentTarget.getAttribute('href'))
        }))
    }

    constructor (url) {
        element = this.buildDOM(url)
        console.log(element)
        document.body.appendChild(element)
    }


    buildDOM(url) {
        const dom = document.querySelector('.lightbox')
        console.log(dom)
        dom.innerHTML = `
                        <button onclick="closeLightbox()" class="lightbox__close">X</button>
                        <button onclick="" class="lightbox__next">-></button>
                        <button onclick="" class="lightbox__previous"><-</button>
                        <img src=${url}>
                        `
        // return dom
    }

}

function displayLightbox() {
    const dom = document.querySelector('.lightbox')
	modal.style.display = "block";
}

function closeLightbox() {
    const dom = document.querySelector('.lightbox')
    modal.style.display = "none";
}
