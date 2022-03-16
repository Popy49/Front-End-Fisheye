//Mettre le code JavaScript lié à la page photographer.html
async function getPhotographers() {
    const data = new UserApi('../../data/photographers.json');
    const datas = await data.get();
    const userdata = datas.photographers;
    const photographers = userdata.map(user => new photographer(user));

    return ({
        photographers
    })
}

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photograph-header");

    // photographers.forEach((photographer) => {
    //     const photographerModel = photographerFactory(photographer);
    //     const userCardDOM = photographerModel.getUserCardDOM();
    //     photographersSection.appendChild(userCardDOM);
    // });


    photographers.forEach((photographer) => {
        if(photographer.id == localStorage.getItem('id')){
            const photographerModel = new photographerBande(photographer);
            const userCardDOM = photographerModel.createUserCard();
            photographersSection.appendChild(userCardDOM);
    }

    });
    
};


async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);
};

init();