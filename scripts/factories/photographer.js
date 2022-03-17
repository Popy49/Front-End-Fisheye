function photographerFactory(data) {
    console.log(data)
    const { name, portrait, city, country, tagline, id, price} = data;

    const picture = `../../assets/photographers/id/${portrait}`;
    const firstname = name.split(' ')[0];
    

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        article.innerHTML = `
                            <a href="photographer.html?id=${id}">
                            <img
                                src="${picture}"
                            />
                            <h2>${name}</h2>
                            </a>
                            <p>${city}</p>
                            <p>${tagline}</p>
                            <p>${price}</p>
                            `
        // const img = document.createElement( 'img' );
        // img.setAttribute("src", picture)
        // const h2 = document.createElement( 'h2' );
        // h2.textContent = name;
        // article.appendChild(img);
        // article.appendChild(h2);
        return (article);
    }
    return { name, portrait, city, country, tagline, id, price, firstname, getUserCardDOM }
}


