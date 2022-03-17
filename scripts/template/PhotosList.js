// class PhotosList {
//     constructor(photo, x) {
//         this.photo = photo
//         this.x = x
//     }

//     createPhotoList() {
//         const $wrapper = document.createElement('article')
//         $wrapper.classList.add('lala')

//         const userCard = `
//             <div class="grid__element">
//                 <a><img
//                     alt="${this.photo.title}, closeup view"
//                     src="../../assets/photographers/${this.x}/${this.photo.image}"
//                     style="width:100px"
//                     /> 
//                     <video controls>
//                         <source src="../../assets/photographers/${this.x}/${this.photo.video}" type="video/mp4">
//                     </video>
//                 </a>
//                 <div>
//                     <h1>${this.photo.title}</h1>
//                     <p>${this.photo.likes} ♥</p>
//                     <p>${this.x} ♥</p>
//                 </div>
//             </div>
//         `
        
//         $wrapper.innerHTML = userCard
//         return $wrapper
//     }

// }

class PhotosList {
    constructor(photo) {
        this.photo = photo
    }

    createPhotoList() {
        const $wrapper = document.createElement('article')
        $wrapper.classList.add('lala')

        const userCard = `
            <div class="grid__element">
                <a><img
                    alt="${this.photo.title}, closeup view"
                    src="../../assets/photographers/${this.x}/${this.photo.image}"
                    style="width:100px"
                    /> 
                    <video controls>
                        <source src="../../assets/photographers/${this.x}/${this.photo.video}" type="video/mp4">
                    </video>
                </a>
                <div>
                    <h1>${this.photo.title}</h1>
                    <p>${this.photo.likes} ♥</p>
                    <p>${this.x} ♥</p>
                </div>
            </div>
        `
        
        $wrapper.innerHTML = userCard
        return $wrapper
    }

}

