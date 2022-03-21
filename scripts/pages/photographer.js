async function getPhotographers() {
    const data = new UserApi('../../data/photographers.json');
    const datas = await data.get();
    const userdata = datas.photographers;
    const photographers = userdata.map(user => photographerFactory(user, "photographer"))
    return ({
        photographers
    })
}

async function displayDataBande(photographers) {
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
    let params = new URLSearchParams(document.location.search)
    const idPhotographer = parseInt(params.get('id'))
    photographers.forEach((photographer) => {
        if(idPhotographer === photographer.id){
            return x = photographer.firstname
    }
    });  
    return x
};


async function getMedias() {
    const data = new UserApi('../../data/photographers.json');
    const datas = await data.get();
    const userdata = datas.media;
    const medias = userdata.map(media => photographerFactory(media, "media"))
    return ({
        medias
    })
}

async function getMediasById(medias) {
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


async function getPhotosByTitle() {
    const data = new UserApi('../../data/photographers.json');
    const datas = await data.get();
    const userdata = datas.media;
    const medias = userdata.map(media => photographerFactory(media, "media"))
    return ({
        medias
    })
}

async function getSort(filter) {
    const { photographers } = await getPhotographers();
    var x = await getFirstname(photographers);
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
    console.log(mediasById) 
    displayGrid(mediasById, x);
}

async function getLikes(medias) {
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

// async function displayBande(likes, price) {
//     const photographersSection = document.querySelector(".photograph-header");
//     const bandeSection = document.createElement("div");
//     bandeSection.innerHTML = `${likes}  ${price}€/jour`
//     photographersSection.appendChild(bandeSection)
// }

async function displayGrid(medias, x) {
    const photographersSection = document.querySelector(".photograph-grid");
    photographersSection.innerHTML = ""
    let params = new URLSearchParams(document.location.search)
    const idPhotographer = parseInt(params.get('id'))
    
    medias.forEach((media) => {
        if(idPhotographer === media.photographerId){
            const photographerModel = photographerFactory(media, "media");
            const userCardDOM = photographerModel.getPhotosListDOM(x);
            photographersSection.appendChild(userCardDOM);
    }
    });  
};

async function addLike(like){
    // like++;
    // const jsonBody = { "name": "Chris", "age": like }
    // fetch(" http://localhost:3000/photographers", {
	// method: "PUT",
	// headers: { 
    //     'Accept': 'application/json', 
    //     'Content-Type': 'application/json' 
    //     },
    //         age: like
    //     });

    // fetch('../../data/test.json')
    // .then(rep => 
    //     {
    //         if (rep.ok === true) return rep.json();
    //         else return Promise.reject(`Erreur HTTP fetch 1 => ${rep.status}`)
    //     }
    // )
    // .then(data => 
    //     {
    //         console.log(data);
    //         console.log(data.photographers);
    //         const doto = data.photographers;
    //         // Je fais une copie de l'objet avant de le modifier
    //         const newData = {...doto};
    //         console.log(newData[3].age);
    //         newData[3].age += 1;
            
    //         // Je prépare le deuxième argument du fetch
    //         console.log(newData);
    //         const myInit = {
    //             method: 'PUT',
    //             body: JSON.stringify(newData),
    //             headers: { 'Content-type': 'application/json; charset=UTF-8' }
    //         }
    //         return fetch('http://localhost:3000/photographers', myInit)
    //     }
    // )
    // .then(rep => 
    //     {
    //         if (rep.ok === true) return rep.json();
    //         else return Promise.reject(`Erreur HTTP fetch 2 => ${rep.status}`)
    //     }
    // )
    // .then(data => console.log(data))
    // .catch(err => console.log(err))
}




async function init() {
    // Récupère les datas des photographes
    // const { photographers } = await getPhotographers();
    // displayData(photographers);
    
    const { photographers } = await getPhotographers();
    displayDataBande(photographers);
    var x = await getFirstname(photographers);
    const { medias } = await getMedias();
    // medias.sort((a, b) => a.title.localeCompare(b.title));
    // getSort(medias);
    var mediaById = await getMediasById(medias);
    displayGrid(mediaById, x);
    var y = await getLikes(medias);
    var z = await getPrice(photographers);
    displayBande(y, z)
    var box = await lightbox.init()
    
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