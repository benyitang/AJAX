async function buscar() {
    let result = document.querySelector("#Carta");
    let input = document.querySelector("#nPokemon").value;
    result.innerHTML = ""; 

    try {
        let pokemonNumber = parseInt(input);
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`);
        if (!response.ok) {
            throw new Error('No se puede conseguir el Pokémon');
        }
        let data = await response.json();
        let pokemonName = data.name;
        let pokemonImage = data.sprites.other.home.front_default;

        let html = `<div class="pokemon">
                        <h1>${pokemonName}</h1>
                        <img src="${pokemonImage}" alt="${pokemonName}" />
                    </div>`;
        result.innerHTML = html;
    } catch (error) {
        console.error('Error:', error);
        result.innerHTML = `<div class="pokemon">
                                <h1>Error al cargar el Pokémon</h1>
                            </div>`;
    }
}
