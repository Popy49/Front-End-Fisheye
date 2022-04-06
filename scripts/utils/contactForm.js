class Modal {

    static async init(firstName) {
        // Initialisation
        const button = document.querySelector('.contact');
        button.addEventListener("click", e => 
        {
            e.preventDefault()
            console.log(e)
            new Modal(firstName)
        })
    }

    constructor (firstName) {
        // Construit l'objet modal
        /**
            * @param {string} firstName
            * 
        */
        this.firstName = firstName
        let element = this.buildDOM()
        this.onKeyUp = this.onKeyUp.bind(this)
        document.addEventListener('keyup', this.onKeyUp)

        const dom = document.querySelector('#contact_modal')
        this.display = dom.style.display = "block"

        const modal = document.getElementById('modal')
        modal.focus()

        const main = document.querySelector('main')
        main.setAttribute('aria-hidden', true)
        main.setAttribute('hidden', true)
    }

    submit(e){
        // Construit l'objet modal
        /**
            * @param {object} mouseevent
            * 
        */
        e.preventDefault()
        const firstname = document.getElementById("First-name").nextElementSibling.value;
        const lastName = document.getElementById("Last-name").nextElementSibling.value;
        const email = document.getElementById("Email").nextElementSibling.value;
        const message = document.getElementById("Message").nextElementSibling.value;
        console.log(firstname, lastName, email, message)
        this.closeModal(this)
    }

    closeModal(e){
        // Ferme la modale
        /**
            * @param {object} mouseevent
            * 
        */
        e.preventDefault;
        const dom = document.querySelector('#contact_modal')
        dom.style.display = "none";
        document.removeEventListener('keyup', this.onKeyUp)

        const main = document.querySelector('main')
        main.setAttribute('aria-hidden', false)
        main.removeAttribute('hidden')
    }

    onKeyUp(e) {
        // Fermeture de la modale au clavier
        /**
            * @param {object} tabevent
            * 
        */
       if(e.key === 'Escape') {
           this.closeModal(e)
       }
    }

    buildDOM() {
        // Construit le DOM 
        /**
            * @return {object} dom
            * 
        */
        const dom = document.querySelector('#contact_modal');
        dom.innerHTML = `
                        <div tabindex="0" id="modal" class="modal" aria-labelledby="contact" role="dialog">
                        <header>
                        <h1 id="contact">Contactez-moi ${this.firstName}</h1>
                        <button class="modal__close"><img class="modal__close" src="assets/icons/close.svg" alt="Close Contact form" /></button>
                        </header>
                        <form>
                        <div>
                            <label id="First-name" for="First-name">Prénom</label>
                            <input type="text" name="First-name" required aria-required=true aria-labelledby="First-name" minlength="2" maxlength="30" placeholder="Prénom" >

                            <label id="Last-name" for="Last-name">Nom</label>
                            <input type="text" name="Last-name" required aria-required=true aria-labelledby="Last-name" minlength="2" maxlength="30" placeholder="Nom">

                            <label id="Email" for="Email">Email</label>
                            <input type="text" name="Email" required aria-required=true aria-labelledby="Email" placeholder="exemple@exemple.com">

                            <label id="Message" for="Message">Message</label>
                            <textarea name="Message" required aria-required=true placeholder="Laissez votre message ici" aria-labelledby="Message"></textarea>

                        </div>
                        <button class="primary_button submit" type="submit">Envoyer</button>
                        </form>
                        </div>
                        `
        dom.querySelector(".modal__close").addEventListener('click', this.closeModal.bind(this));
        dom.querySelector(".submit").addEventListener('click', this.submit.bind(this));
        return dom
    }
}

