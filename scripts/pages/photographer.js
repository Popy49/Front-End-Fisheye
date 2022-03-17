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


async function getFirstname() {
    const data = new UserApi('../../data/photographers.json');
    const datas = await data.get();
    var datass = datas.photographers;
    var firstName = "";
    datass.forEach((photo) => {
        if (photo.id === parseInt(localStorage.getItem('id'))) {
            return firstName = new photographer(photo).firstname;
        }
    });
    return firstName;
};

async function getPhotos() {
    //recuperation first name pour dossier
    const photographersSection = document.querySelector(".lala");
    const data = new UserApi('../../data/photographers.json');
    const datas = await data.get();
    const userdata = datas.media;
    const firstName = await getFirstname();
    userdata.forEach((photo) => {
        if(photo.photographerId == localStorage.getItem('id')){
            const photographerModel = new PhotosList(photo, firstName);
            const userCardDOM = photographerModel.createPhotoList();
            photographersSection.appendChild(userCardDOM);

    }});
}

async function getpoto() {
    const photographersSection = document.querySelector(".lala");
    const data = new UserApi('../../data/photographers.json');
    const datas = await data.get();
    const userdata = datas.media;
    const firstName = await getFirstname();
    
    userdata.forEach((photo) => {
        if(photo.photographerId == localStorage.getItem('id')){
            const test = new Photos(photo);
            console.log(test.getMedia(firstName));
            const userCardDOM = document.createElement('div');
            userCardDOM.innerHTML = test.getMedia(firstName)
            photographersSection.appendChild(userCardDOM);
        }
    });

}

// async function getpoto() {
    
//     const data = new UserApi('../../data/photographers.json');
//     const datas = await data.get();
//     const userdata = datas.media;
//     const firstName = await getFirstname();
//     var test = 0;
    
//     userdata.forEach((photo) => {
//         if(photo.photographerId == localStorage.getItem('id')){
//             test = userdata.map(photo => new Photos(photo));
//         }
//     } );
//     console.log(test)

//     return ({
//         test
//     })

// }

// async function displaypoto(test) {
//     const photographersSection = document.querySelector(".lala");

//     test.forEach((photographer) => {
//         console.log(photographer)
//         const photographerModel = new PhotosList(photographer);
//         const userCardDOM = photographerModel.createPhotoList();
//         photographersSection.appendChild(userCardDOM);
//     });
// }


// async function getPhotos() {
//     //recuperation first name pour dossier
//     const photographersSection = document.querySelector(".lala");
//     const data = new UserApi('../../data/photographers.json');
//     const datas = await data.get();
//     const userdata = datas.media;
//     var datass = datas.photographers;
//     userdata.forEach((photo) => {
//         if(photo.photographerId == localStorage.getItem('id')){
//             datass.forEach((photox) => {
//                 if (photo.photographerId === photox.id) {
//                     return x = new photographer(photox).firstname;
//                 }
//             });
            
//             const photographerModel = new PhotosList(photo, x);
//             const userCardDOM = photographerModel.createPhotoList();
//             photographersSection.appendChild(userCardDOM);

//     }});
// }

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);
    // getPhotos();
    getpoto();
    // const { test } = await getpoto();
    // displaypoto(test)
};

init();