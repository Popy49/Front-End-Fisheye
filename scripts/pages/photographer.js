async function getPhotographers() {
    // Récupère les datas des photographes
        /**
        * @return {object} photographers
    */
    const data = new UserApi('../../data/photographers.json');
    const datas = await data.get();
    const userdata = datas.photographers;
    const photographers = userdata.map(user => photographerFactory(user, "photographer"))
    return ({
        photographers
    })
}

async function displayDataBande(photographers) {
    // Affichage du header photogtaphe dans le DOM
        /**
        * @param {object} photographers
    */
    const photographersSection = document.querySelector(".photograph-header");
    let params = new URLSearchParams(document.location.search)
    const idPhotographer = parseInt(params.get('id'))
    photographers.forEach((photographer) => {
        if(idPhotographer === photographer.id){
            const photographerModel = photographerFactory(photographer, "photographer");
            const userCardDOM = photographerModel.getUserBandeDOM();
            photographersSection.appendChild(userCardDOM);
    }
    });  
};

async function getFirstname(photographers) {
    // Récupère le prénom de photographe
        /**
        * @param {object} photographers
        * @return {string} firstName
    **/
    let params = new URLSearchParams(document.location.search)
    const idPhotographer = parseInt(params.get('id'))
    photographers.forEach((photographer) => {
        if(idPhotographer === photographer.id){
            return firstName = photographer.firstname
    }
    });  
    return firstName
};


async function getMedias() {
    // Récupère les datas médias 
        /**
        * @return {object} medias
    */
    const data = new UserApi('../../data/photographers.json');
    const datas = await data.get();
    const userdata = datas.media;
    const medias = userdata.map(media => photographerFactory(media, "media"))
    return ({
        medias
    })
}

async function getMediasById(medias) {
    // Récupère les datas médias d'un seul photographe
        /**
        * @param {object} medias
        * @return {object} mediasById
    */
    let params = new URLSearchParams(document.location.search)
    const idPhotographer = parseInt(params.get('id'))
    let mediasById = []
    medias.forEach((media) => {
        if(idPhotographer === media.photographerId){
            mediasById.push(media)
    } 
    }); 
    console.log(mediasById) 
    return mediasById
}



async function getSort(filter) {
    // Tri les résultats de sortie des medias (titre, date ou popularité)
        /**
        * @param {string} filter
    */
    const { photographers } = await getPhotographers();
    var firstName = await getFirstname(photographers);
    const { medias } = await getMedias();
    var mediasById = await getMediasById(medias);
    var t=[];
    if(filter.value==="Popularité"){
        var sortByLikes = mediasById.sort(function (a, b) {
                return a.likes - b.likes;
              });
            t = sortByLikes.reverse()
    } else if (filter.value==="Titre") {
        t = mediasById.sort((a, b) => a.title.localeCompare(b.title))
    } else {
        var sortByDate = mediasById.sort(function (a, b) {
            return a.date - b.date;
          });
        t = sortByDate.reverse()
    } 
    displayGrid(mediasById, firstName);
    var box = await lightbox.init()
}

async function getName(photographers) {
    // Récupère le nom du photographe
        /**
        * @param {object} photographers
        * @returns {string} name
    */
    let params = new URLSearchParams(document.location.search)
    const idPhotographer = parseInt(params.get('id'))
    name = "";
    photographers.forEach((photographer) => {
        if(idPhotographer === photographer.id){
            name = photographer.name
    } 
    });  
    return name
}



async function getLikes(medias) {
    // Récupère le nombre de like total
        /**
        * @param {object} medias
        * @returns {number} likes
    */
    let params = new URLSearchParams(document.location.search)
    const idPhotographer = parseInt(params.get('id'))
    let likes = 0;
    medias.forEach((media) => {
        if(idPhotographer === media.photographerId){
            likes += media.likes
    } 
    });  
    return likes
};




async function getPrice(photographers) {
    // Récupère le tarif du photographe
        /**
        * @param {object} photographers
        * @returns {number} price
    */
    let params = new URLSearchParams(document.location.search)
    const idPhotographer = parseInt(params.get('id'))
    price = 0;
    photographers.forEach((photographer) => {
        if(idPhotographer === photographer.id){
            price = photographer.price
    } 
    });  
    return price
};

async function displayBande(likes, price) {
    // Affichage de la bande sticky
        /**
        * @param {number} likes, price
        * 
    */
    const photographersSection = document.querySelector(".total");
    const bandeSection = document.createElement("div");
    const likesSection = document.createElement("span");
    const priceSection = document.createElement("span");
    bandeSection.classList.add("total--likes")
    priceSection.classList.add("total--price")
    likesSection.innerHTML = `${likes} ♥`
    priceSection.innerHTML = ` ${price}€/jour`
    bandeSection.appendChild(likesSection)
    bandeSection.appendChild(priceSection)
    photographersSection.appendChild(bandeSection)
    
}

async function displayGrid(medias, firstName) {
    // Affichage de la grille des medias
    /**
        * @param {object} medias
        * @param {string} firstName
        * 
    */
    const photographersSection = document.querySelector(".photograph-grid");
    photographersSection.innerHTML = ""
    let params = new URLSearchParams(document.location.search)
    const idPhotographer = parseInt(params.get('id'))
    
    medias.forEach((media) => {
        if(idPhotographer === media.photographerId){
            const photographerModel = photographerFactory(media, "media");
            const userCardDOM = photographerModel.getPhotosListDOM(firstName );
            photographersSection.appendChild(userCardDOM);
    }
    });  
};

async function addLike(e){
    // Ajoute un like au clique
    /**
        * @param {object} event
        * 
    */
    let like = parseInt(e.parentElement.firstElementChild.textContent) 
    let likes = parseInt(document.querySelector('.total--likes').firstChild.textContent)
    like++
    likes++
    e.parentElement.firstElementChild.innerHTML = like;
    document.querySelector('.total--likes').firstChild.innerHTML = `${likes} ♥`
}




async function init() {
    // Initialisation
    const { photographers } = await getPhotographers();
    displayDataBande(photographers);
    var firstName = await getFirstname(photographers);
    const { medias } = await getMedias();
    var mediaById = await getMediasById(medias);
    displayGrid(mediaById, firstName);
    var likes = await getLikes(medias);
    var price = await getPrice(photographers);
    var name = await getName(photographers);
    displayBande(likes, price)
    var box = await lightbox.init()
    var modal = await Modal.init(name)
};

init();







// //Mettre le code JavaScript lié à la page photographer.html
// async function getPhotographers() {
//     const data = new UserApi('../../data/photographers.json');
//     const datas = await data.get();
//     const userdata = datas.photographers;
//     const photographers = userdata.map(user => new photographer(user));


//     return ({
//         photographers
//     })
// }

// async function displayData(photographers) {
//     const photographersSection = document.querySelector(".photograph-header");

//     // photographers.forEach((photographer) => {
//     //     const photographerModel = photographerFactory(photographer);
//     //     const userCardDOM = photographerModel.getUserCardDOM();
//     //     photographersSection.appendChild(userCardDOM);
//     // });


//     photographers.forEach((photographer) => {
//         if(photographer.id == localStorage.getItem('id')){
//             const photographerModel = new photographerBande(photographer);
//             const userCardDOM = photographerModel.createUserCard();
//             photographersSection.appendChild(userCardDOM);
//     }

//     });
    
// };


// async function getFirstname() {
//     const data = new UserApi('../../data/photographers.json');
//     const datas = await data.get();
//     var datass = datas.photographers;
//     var firstName = "";
//     datass.forEach((photo) => {
//         if (photo.id === parseInt(localStorage.getItem('id'))) {
//             return firstName = new photographer(photo).firstname;
//         }
//     });
//     return firstName;
// };

// async function getPhotos() {
//     //recuperation first name pour dossier
//     const photographersSection = document.querySelector(".lala");
//     const data = new UserApi('../../data/photographers.json');
//     const datas = await data.get();
//     const userdata = datas.media;
//     const firstName = await getFirstname();
//     userdata.forEach((photo) => {
//         if(photo.photographerId == localStorage.getItem('id')){
//             const photographerModel = new PhotosList(photo, firstName);
//             const userCardDOM = photographerModel.createPhotoList();
//             photographersSection.appendChild(userCardDOM);

//     }});
// }

// async function getpoto() {
//     const photographersSection = document.querySelector(".lala");
//     const data = new UserApi('../../data/photographers.json');
//     const datas = await data.get();
//     const userdata = datas.media;
//     const firstName = await getFirstname();
    
//     userdata.forEach((photo) => {
//         if(photo.photographerId == localStorage.getItem('id')){
//             const test = new Photos(photo);
//             console.log(test.getMedia(firstName));
//             const userCardDOM = document.createElement('div');
//             userCardDOM.innerHTML = test.getMedia(firstName)
//             photographersSection.appendChild(userCardDOM);
//         }
//     });

// }

// // async function getpoto() {
    
// //     const data = new UserApi('../../data/photographers.json');
// //     const datas = await data.get();
// //     const userdata = datas.media;
// //     const firstName = await getFirstname();
// //     var test = 0;
    
// //     userdata.forEach((photo) => {
// //         if(photo.photographerId == localStorage.getItem('id')){
// //             test = userdata.map(photo => new Photos(photo));
// //         }
// //     } );
// //     console.log(test)

// //     return ({
// //         test
// //     })

// // }

// // async function displaypoto(test) {
// //     const photographersSection = document.querySelector(".lala");

// //     test.forEach((photographer) => {
// //         console.log(photographer)
// //         const photographerModel = new PhotosList(photographer);
// //         const userCardDOM = photographerModel.createPhotoList();
// //         photographersSection.appendChild(userCardDOM);
// //     });
// // }


// // async function getPhotos() {
// //     //recuperation first name pour dossier
// //     const photographersSection = document.querySelector(".lala");
// //     const data = new UserApi('../../data/photographers.json');
// //     const datas = await data.get();
// //     const userdata = datas.media;
// //     var datass = datas.photographers;
// //     userdata.forEach((photo) => {
// //         if(photo.photographerId == localStorage.getItem('id')){
// //             datass.forEach((photox) => {
// //                 if (photo.photographerId === photox.id) {
// //                     return x = new photographer(photox).firstname;
// //                 }
// //             });
            
// //             const photographerModel = new PhotosList(photo, x);
// //             const userCardDOM = photographerModel.createPhotoList();
// //             photographersSection.appendChild(userCardDOM);

// //     }});
// // }

// async function init() {
//     // Récupère les datas des photographes
//     const { photographers } = await getPhotographers();
//     displayData(photographers);
//     // getPhotos();
//     getpoto();
//     // const { test } = await getpoto();
//     // displaypoto(test)
// };

// init();