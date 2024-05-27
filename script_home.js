document.addEventListener('DOMContentLoaded', function() {
    const juegosContainer = document.querySelector('#juegos');

    fetch('juegos.json')
        .then(response => response.json())
        .then(juegosData => {
            juegosData.forEach((juego, index) => {
                const cardHTML = `
                    <div class="juego ${index === 0 ? 'first-card' : ''}">
                        <img src="img/${juego.imagen}" alt="${juego.nombre}">
                        <h2>${juego.nombre}</h2>
                        <p>${juego.descripcion}</p>
                        <div class="card-hover">
                            <p>${juego.resena}</p>
                            <p>${juego.infoAdicional}</p>
                        </div>
                    </div>
                `;
                juegosContainer.innerHTML += cardHTML;
            });
        })
        .catch(error => console.error('Error fetching the game data:', error));
});

