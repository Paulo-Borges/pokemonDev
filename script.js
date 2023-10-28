const pokemonName = document.querySelector('.name_title')
const pokemonNumber = document.querySelector('.number_title')
const pokemonImagem = document.querySelector('.img_cards')
const pokemonUrl = document.querySelector('.url')
const pokemonApelido = document.querySelector('.apelido')
const pokemonPeso = document.querySelector('.peso')

const form = document.querySelector('.form')
const input = document.querySelector('.filtro')
const favorito = document.querySelector('.favorito')

const pokemonName2 = document.querySelector('.name_title2')
const pokemonNumber2 = document.querySelector('.number_title2')
const pokemonImagem2 = document.querySelector('.img_cards2')
const pokemonUrl2 = document.querySelector('.url2')
const pokemonApelido2 = document.querySelector('.apelido2')
const pokemonPeso2 = document.querySelector('.peso2')

const pokemonName3 = document.querySelector('.name_title3')
const pokemonNumber3 = document.querySelector('.number_title3')
const pokemonImagem3 = document.querySelector('.img_cards3')
const pokemonUrl3 = document.querySelector('.url3')
const pokemonApelido3 = document.querySelector('.apelido3')
const pokemonPeso3 = document.querySelector('.peso3')

const pokemonName4 = document.querySelector('.name_title4')
const pokemonNumber4 = document.querySelector('.number_title4')
const pokemonImagem4 = document.querySelector('.img_cards4')
const pokemonUrl4 = document.querySelector('.url4')
const pokemonApelido4 = document.querySelector('.apelido4')
const pokemonPeso4 = document.querySelector('.peso4')

const pokemonName5 = document.querySelector('.name_title5')
const pokemonNumber5 = document.querySelector('.number_title5')
const pokemonImagem5 = document.querySelector('.img_cards5')
const pokemonUrl5 = document.querySelector('.url5')
const pokemonApelido5 = document.querySelector('.apelido5')
const pokemonPeso5 = document.querySelector('.peso5')

const pokemonName6 = document.querySelector('.name_title6')
const pokemonNumber6 = document.querySelector('.number_title6')
const pokemonImagem6 = document.querySelector('.img_cards6')
const pokemonUrl6 = document.querySelector('.url6')
const pokemonApelido6 = document.querySelector('.apelido6')
const pokemonPeso6 = document.querySelector('.peso6')

const pokemonName7 = document.querySelector('.name_title7')
const pokemonNumber7 = document.querySelector('.number_title7')
const pokemonImagem7 = document.querySelector('.img_cards7')
const pokemonUrl7 = document.querySelector('.url7')
const pokemonApelido7 = document.querySelector('.apelido7')
const pokemonPeso7 = document.querySelector('.peso7')

const pokemonName8 = document.querySelector('.name_title8')
const pokemonNumber8 = document.querySelector('.number_title8')
const pokemonImagem8 = document.querySelector('.img_cards8')
const pokemonUrl8 = document.querySelector('.url8')
const pokemonApelido8 = document.querySelector('.apelido8')
const pokemonPeso8 = document.querySelector('.peso8')


const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    const data = await APIResponse.json()
    return (data)
}

const renderPokemon = async (pokemon) => {
    const data = await fetchPokemon(pokemon)

    pokemonName.innerHTML = data.name
    pokemonNumber.innerHTML = data.id
    pokemonImagem.src = data['sprites']['versions']['generation-v'] ['black-white']['animated']['front_default']
    pokemonUrl.innerHTML = data['species']['url']
    pokemonApelido.innerHTML = data['types']['0']['type']['name']
    pokemonPeso.innerHTML = data.weight



}

renderPokemon(27)

const renderPokemon2 = async (pokemon) => {
    const data = await fetchPokemon(pokemon)

    pokemonName2.innerHTML = data.name
    pokemonNumber2.innerHTML = data.id
    pokemonImagem2.src = data['sprites']['versions']['generation-v'] ['black-white']['animated']['front_default']
    pokemonUrl2.innerHTML = data['species']['url']
    pokemonApelido2.innerHTML = data['types']['0']['type']['name']
    pokemonPeso2.innerHTML = data.weight
}

renderPokemon2(25)

const renderPokemon3 = async (pokemon) => {
    const data = await fetchPokemon(pokemon)

    pokemonName3.innerHTML = data.name
    pokemonNumber3.innerHTML = data.id
    pokemonImagem3.src = data['sprites']['versions']['generation-v'] ['black-white']['animated']['front_default']
    pokemonUrl3.innerHTML = data['species']['url']
    pokemonApelido3.innerHTML = data['types']['0']['type']['name']
    pokemonPeso3.innerHTML = data.weight

}

renderPokemon3(13)

const renderPokemon4 = async (pokemon) => {
    const data = await fetchPokemon(pokemon)

    pokemonName4.innerHTML = data.name
    pokemonNumber4.innerHTML = data.id
    pokemonImagem4.src = data['sprites']['versions']['generation-v'] ['black-white']['animated']['front_default']
    pokemonUrl4.innerHTML = data['species']['url']
    pokemonApelido4.innerHTML = data['types']['0']['type']['name']
    pokemonPeso4.innerHTML = data.weight

}

renderPokemon4(30)

const renderPokemon5 = async (pokemon) => {
    const data = await fetchPokemon(pokemon)

    pokemonName5.innerHTML = data.name
    pokemonNumber5.innerHTML = data.id
    pokemonImagem5.src = data['sprites']['versions']['generation-v'] ['black-white']['animated']['front_default']
    pokemonUrl5.innerHTML = data['species']['url']
    pokemonApelido5.innerHTML = data['types']['0']['type']['name']
    pokemonPeso5.innerHTML = data.weight

}

renderPokemon5(24)

const renderPokemon6 = async (pokemon) => {
    const data = await fetchPokemon(pokemon)

    pokemonName6.innerHTML = data.name
    pokemonNumber6.innerHTML = data.id
    pokemonImagem6.src = data['sprites']['versions']['generation-v'] ['black-white']['animated']['front_default']
    pokemonUrl6.innerHTML = data['species']['url']
    pokemonApelido6.innerHTML = data['types']['0']['type']['name']
    pokemonPeso6.innerHTML = data.weight

}

renderPokemon6(11)

const renderPokemon7 = async (pokemon) => {
    const data = await fetchPokemon(pokemon)

    pokemonName7.innerHTML = data.name
    pokemonNumber7.innerHTML = data.id
    pokemonImagem7.src = data['sprites']['versions']['generation-v'] ['black-white']['animated']['front_default']
    pokemonUrl7.innerHTML = data['species']['url']
    pokemonApelido7.innerHTML = data['types']['0']['type']['name']
    pokemonPeso7.innerHTML = data.weight

}

renderPokemon7(14)

const renderPokemon8 = async (pokemon) => {
    const data = await fetchPokemon(pokemon)

    pokemonName8.innerHTML = data.name
    pokemonNumber8.innerHTML = data.id
    pokemonImagem8.src = data['sprites']['versions']['generation-v'] ['black-white']['animated']['front_default']
    pokemonUrl8.innerHTML = data['species']['url']
    pokemonApelido8.innerHTML = data['types']['0']['type']['name']
    pokemonPeso8.innerHTML = data.weight

}

renderPokemon8(5)



const exibirPokemon = async (pokemon) => {
    const data = await fetchPokemon(pokemon)

    favorito.innerHTML = data.name
    

}


form.addEventListener('submit', (event) => {
  event.preventDefault()

  exibirPokemon(input.value)
  input.value = ""

})