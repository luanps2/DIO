// function convertPokemonTypesLi(pokemonTypes) {
//     return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
// }

const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');

const maxRecords = 151;
const limit = 10;
let offset = 0;

function convertPokemonToLi(pokemon) {
    return `<li class="pokemon ${pokemon.type}">
    <span class="number">#${pokemon.number}</span>
    <span class="name">${pokemon.name}</span>

    <div class="detail">
        <ol class="types">
            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
        </ol>

        <img src="${pokemon.photo}"
            alt="${pokemon.name}" srcset="">
    </div>

</li>`
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml;
    })

}

loadPokemonItens(offset, limit)


loadMoreButton.addEventListener('click', () => {
    offset += limit;
    const qtdRecordWithNextPage = offset + limit
    
    if (qtdRecordWithNextPage >= maxRecords) {
        const newLimit = qtdRecordWithNextPage - maxRecords
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    }else{
        loadPokemonItens(offset, limit)
    }
    
})






























// const listItems = []
//     for (let i = 0; i < pokemons.length; i++) {
//         const pokemon = pokemons[i];
//         listItems.push(convertPokemonToLi(pokemon))
//     }
// pokemonList.innerHTML += convertPokemonToLi(pokemon);
// console.log(listItems)
// })





// fetch(url)
//     .then(function (response) {
//         response.json().then(function (responseBoby){
//             console.log(responseBoby)
//         })
//     })
//     .catch(function (error) {
//         console.log(error)
//     })
//     .finally(function () {
//         console.log('Requisição concluída')
//     });

