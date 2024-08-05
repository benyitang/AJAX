function buscarPokemon() {
    const pokemonNumber = document.getElementById('pokemonNumber').value;
    const pokemonInfo = document.getElementById('pokemonInfo');

    if (!pokemonNumber) {
        pokemonInfo.innerHTML = "<div>Por favor, ingrese un número.</div>";
        return;
    }

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`)
        .then(response => response.json())
        .then(data => {
            const nombre = data.name;
            const tipos = data.types.map(tipo => tipo.type.name).join(', ');
            const imagen = data.sprites.front_default;

            pokemonInfo.innerHTML = `
                <img src="${imagen}" alt="Imagen de ${nombre}">
                <div><strong>Nombre:</strong> ${nombre}</div>
                <div><strong>Tipo(s):</strong> ${tipos}</div>
            `;
        })
        .catch(error => {
            pokemonInfo.innerHTML = "<div>No se encontró el Pokémon con ese número.</div>";
        });
}
