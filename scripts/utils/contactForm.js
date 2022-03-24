class Modal {

    static async init(firstName) {
        
        const button = document.querySelector('.contact');
        button.addEventListener("click", e => 
        {
            e.preventDefault()
            console.log(e)
            new Modal(firstName)
        })
    }

    constructor (firstName) {
        console.log(firstName)
        this.firstName = firstName
        let element = this.buildDOM()
        const dom = document.querySelector('#contact_modal')
        
        console.log(this.firstName)
        this.display = dom.style.display = "block"
        // const dom = document.querySelector('#contact_modal')
        // const close = document.querySelector(".modal__close")
        // this.display = dom.style.display = "block"
        // this.close = this.closeModal()
        
    }

    closeModal(e){
        e.preventDefault;
        const dom = document.querySelector('#contact_modal')
        dom.style.display = "none";
    }

    buildDOM() {
        const dom = document.querySelector('#contact_modal');
        console.log(dom)
        dom.innerHTML = `
                        <div class="modal">
                        <header>
                        <h1>Contactez-moi ${this.firstName}</h1>
                        <img class="modal__close" src="assets/icons/close.svg" />
                        </header>
                        <form>
                        <div>
                            <label id="First-name" for="First-name">Prénom</label>
                            <input type="text" id="First-name" name="First-name" required aria-labelledby="First-name" minlength="2" maxlength="30">

                            <label id="Last-name" for="Last-name">Nom</label>
                            <input type="text" id="Last-name" name="Last-name" required aria-labelledby="Last-name" minlength="2" maxlength="30">

                            <label id="Email" for="Email">Email</label>
                            <input type="text" id="Email" name="Email" required aria-labelledby="Email">

                            <label id="Message" for="Message">Message</label>
                            <textarea id="Message" name="Message" placeholder="Laissez votre message ici" aria-labelledby="Message"></textarea>
                        </div>
                        <button class="primary_button">Envoyer</button>
                        </form>
                        </div>
                        `
        dom.querySelector(".modal__close").addEventListener('click', this.closeModal.bind(this));
        return dom
    }

    // closeModal(e){
    //     const dom = document.querySelector('#contact_modal')
    //     dom.querySelector(".modal__close").addEventListener('click', dom.style.display = "none");
    //     // e.preventDefault;
    //     // const dom = document.querySelector('.modal__close')
    //     // // dom.querySelector(".lightbox__close").addEventListener('click', this.closeLightbox.bind(this));
    //     // dom.style.display = "none";
    // }



}

// function displayModal() {
//     const modal = document.getElementById("contact_modal");
// 	modal.style.display = "block";
// }

// function closeModal() {
//     const modal = document.getElementById("contact_modal");
//     modal.style.display = "none";
// }

