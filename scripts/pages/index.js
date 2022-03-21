    async function getPhotographers() {
        const data = new UserApi('../../data/photographers.json');
        const datas = await data.get();
        const userdata = datas.photographers;
        const photographers = userdata.map(user => photographerFactory(user, "photographer"))
        return ({
            photographers
        })
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");
        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer, "photographer");
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
        
    };

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    
    init();
    