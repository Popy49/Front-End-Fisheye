    async function getPhotographers() {
        const data = new UserApi('../../data/photographers.json');
        const datas = await data.get();
        // const photographers = datas.photographers;
        // console.log(photographers);
        // const lospo = new photographer(datas)
        // console.log(lospo)
        const userdata = datas.photographers;
        const photographers = userdata.map(user => new photographer(user));
        console.log(photographers);

        return ({
            photographers
        })
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = new photographerCard(photographer);
            const userCardDOM = photographerModel.createUserCard();
            photographersSection.appendChild(userCardDOM);
        });
        
    };

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    
    init();
    