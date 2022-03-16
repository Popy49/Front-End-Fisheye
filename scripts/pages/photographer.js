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


// async function getPhotos() {
//     const data = new UserApi('../../data/photographers.json');
//     const datas = await data.get();
//     const userdata = datas.photographers;
//     const id = userdata.map(user => user.id);
//     console.log(id)
//     id.forEach((id) => {
//         if(id == localStorage.getItem('id')){
//             return id;
//     }});

// };

async function getPhotos() {
    //recuperation first name pour dossier
    
    


    const photographersSection = document.querySelector(".lala");
    const data = new UserApi('../../data/photographers.json');
    const datas = await data.get();
    const userdata = datas.media;
    var datass = datas.photographers;
    console.log(datass);
    console.log(userdata)

    


    userdata.forEach((photo) => {
        if(photo.photographerId == localStorage.getItem('id')){
            datass.forEach((photox) => {
                
                if (photo.photographerId === photox.id) {
                    return x = new photographer(photox).firstname;
                }
            });
            console.log(x)
            const photographerModel = new PhotosList(photo, x);
            const userCardDOM = photographerModel.createPhotoList();
            photographersSection.appendChild(userCardDOM);

    }});
}

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);
    getPhotos();
};

init();