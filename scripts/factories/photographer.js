function photographerFactory(data, type) {
    if(type == "photographer") {
        const { name, portrait, city, country, tagline, id, price} = data;
        const picture = `../../assets/photographers/id/${portrait}`;
        const firstname = name.split(' ')[0];

        function getUserCardDOM() {
            const article = document.createElement( 'article' );
            article.innerHTML = `
                                <a href="photographer.html?id=${id}">
                                <img class="photographer__image"
                                    src="${picture}"
                                />
                                <h2>${name}</h2>
                                </a>
                                <p>${city}, ${country}</p>
                                <p>${tagline}</p>
                                <p>${price}€/jour</p>
                                `
            return (article);
        }

        function getUserBandeDOM() {
            const article = document.createElement( 'article' );
            article.innerHTML = `
                                    <div class="photograph-header__infos">
                                        <h1>${name}</h1>
                                        <p>${city}, ${country}</p>
                                        <p>${tagline}</p>
                                    </div>
                                    
                                    <button class="primary_button contact">Contactez-moi</button>
                                    <img class="photographer__image" alt="${name}"
                                        src="${picture}"
                                    />
                                `
            return (article);
        }
        return { name, portrait, city, country, tagline, id, price, firstname, getUserCardDOM, getUserBandeDOM }

    } else if(type == "media") {
        const { photographerId, title, image, video, likes, date, price} = data;

        function getMedia(firstName) {
            if(image){
                return `<div class="grid__image">
                        <a class="lightbox__media" href="../../assets/photographers/${firstName}/${image}">
                        <img
                            
                            alt="${title}, closeup view"
                            src="../../assets/photographers/${firstName}/${image}"
                            "
                        /> 
                        </a>
                        </div>`
            } else if(video) {
                return `<div class="grid__image">
                        <a class="lightbox__media" href="../../assets/photographers/${firstName}/${video}">
                        <video controls="controls" preload="metadata">
                            <meta itemprop="name" content="${title}, closeup view">
                            <source src="../../assets/photographers/${firstName}/${video}#t=5" type="video/mp4">
                        </video>
                        </a>
                        </div>`
            }
        }



        function getPhotosListDOM(firstName) {
            const article = document.createElement( 'article' );
            article.innerHTML = `
                                <div class="grid">
                                `+
                                getMedia(firstName)
                                +`
                                
                                    <div class="grid__infos">
                                        <p>${title}</p>
                                        <div class="grid__infos--flexend">
                                        <p>${likes}</p>
                                        <button class="likeBtn" onclick="addLike(${likes})">♥</button>
                                        </div>
                                    </div>
                                </div>
                                `
            return (article);
        }

        

        return { photographerId, title, image, video, likes, date, price, getPhotosListDOM}

        
}}


