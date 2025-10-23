👾 Pokémon Cards Explorer
Um aplicativo web interativo que exibe uma galeria de cartas de Pokémon, consumindo dados da PokeAPI. Permite aos usuários visualizar informações de diversos Pokémons e buscar seu favorito.

✨ Recursos
Exibição de Múltiplos Cards: Mostra 8 Pokémons pré-definidos na galeria principal.

Integração com PokeAPI: Busca dinamicamente nome, número, imagem animada, peso, e o primeiro tipo (apelido) do Pokémon.

Funcionalidade de Busca: O usuário pode digitar o nome ou número de um Pokémon para exibi-lo na seção "Meu Favorito".

Design Responsivo: O layout se adapta a diferentes tamanhos de tela (desktop, tablet e mobile) utilizando CSS Media Queries.

Estrutura Modular: O HTML está bem dividido em seções (header, container, main, footer) e o CSS utiliza classes BEM-like para estilização.

🛠️ Tecnologias Utilizadas
HTML5: Estrutura semântica da página.

CSS3: Estilização responsiva e visual.

JavaScript (ES6+): Manipulação do DOM e consumo da API.

PokeAPI: Fonte dos dados dos Pokémons.

Fetch API: Para fazer requisições assíncronas aos dados da PokeAPI.

🚀 Como Executar o Projeto
Siga os passos abaixo para ter uma cópia local do projeto em execução.

Pré-requisitos
Você só precisa de um navegador web moderno (como Google Chrome, Firefox ou Edge) para visualizar o projeto e um editor de código (como VS Code) para modificar os arquivos.

Instalação
Clone o repositório para sua máquina local:

Bash

git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
Navegue até o diretório do projeto:

Bash

cd SEU_REPOSITORIO
Abra o arquivo index.html no seu navegador. Você pode fazer isso clicando duas vezes no arquivo ou usando a opção "Abrir com" do seu editor.

O aplicativo deve carregar instantaneamente, buscando os dados dos Pokémons da API.

📂 Estrutura do Projeto
.
├── index.html # Estrutura principal da aplicação.
├── styles.css # Estilos da aplicação, incluindo responsividade.
├── script.js # Lógica para consumo da API e manipulação do DOM.
├── iconBorges.svg # Ícone do cabeçalho.
└── favicon-16x16.png # Favicon da página.
📝 Detalhes do Código
HTML (index.html)
O HTML é o esqueleto da aplicação. A seção <main id="cards" class="main"> contém 8 blocos de div class="cards", cada um estruturado para exibir as informações de um Pokémon.

Exemplo de um Card:

HTML

<div class="cards">
  <img class="img_cards" src="#" alt="" />
  <div>
    <div class="movie">
      <h2 class="name_title"></h2>
      <p class="number_title">Nº:</p>
    </div>
    <div class="valores">
      <div>
        <p class="bold">Apelido</p>
        <span class="apelido">$94m</span>
      </div>
      <div>
        <p class="bold">Peso</p>
        <span class="peso">$984m</span>
      </div>
    </div>
  </div>
</div>
Nota: As classes CSS são numeradas (.img_cards2, .name_title3, etc.) para permitir a seleção e o preenchimento individual de cada card via JavaScript.

CSS (styles.css)
O CSS garante que a aplicação seja agradável e funcional em qualquer dispositivo.

Estilos Principais: Definição de cores (#4c16c9 para elementos principais), fontes e layout básico (flexbox para cabeçalho e grid ou flexbox para a área de cards).

Layout Responsivo: Utiliza Media Queries para reorganizar a galeria de cards:

Max-width 820px: 3 colunas

Max-width 620px: 2 colunas e muda a organização da seção de filtro para coluna.

Max-width 420px: 1 coluna (pilha vertical).

JavaScript (script.js)
O JavaScript é o motor que interage com a API e atualiza a interface.

1. Seleção de Elementos
   Todos os campos de texto e imagem de cada um dos 8 cards, além do formulário e campo de favorito, são selecionados individualmente.

JavaScript

// Exemplo de seleção para o primeiro card
const pokemonName = document.querySelector('.name_title')
const pokemonImagem = document.querySelector('.img_cards')
// ... e assim por diante para 8 conjuntos ... 2. Função de Busca na API
A função fetchPokemon é responsável por fazer a requisição HTTP.

JavaScript

const fetchPokemon = async (pokemon) => {
const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
const data = await APIResponse.json()
return (data)
} 3. Funções de Renderização
Existem 8 funções de renderização (renderPokemon, renderPokemon2, ..., renderPokemon8), uma para cada card, que buscam os dados e os inserem nos elementos HTML correspondentes.

JavaScript

const renderPokemon = async (pokemon) => {
const data = await fetchPokemon(pokemon)

    pokemonName.innerHTML = data.name
    pokemonNumber.innerHTML = data.id
    // Acesso à imagem animada de Geração V
    pokemonImagem.src = data['sprites']['versions']['generation-v'] ['black-white']['animated']['front_default']
    pokemonApelido.innerHTML = data['types']['0']['type']['name'] // Tipo do Pokémon
    pokemonPeso.innerHTML = data.weight

}

renderPokemon(27) // Inicia o carregamento do Pokémon de ID 27 (Sandshrew) 4. Funcionalidade de Favorito/Busca
Um event listener é anexado ao formulário para buscar e exibir o Pokémon desejado na seção "Meu Favorito" (.favorito) quando o formulário é enviado (botão/tecla Enter).

JavaScript

const exibirPokemon = async (pokemon) => {
const data = await fetchPokemon(pokemon)
favorito.innerHTML = data.name // Atualiza o nome do favorito
}

form.addEventListener('submit', (event) => {
event.preventDefault()
exibirPokemon(input.value.toLowerCase()) // Busca o Pokémon
input.value = "" // Limpa o campo de busca
})
🤝 Contribuições
Contribuições, issues e feature requests são bem-vindos! Sinta-se à vontade para clonar e melhorar o projeto.

📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE (se existir) para mais detalhes.

Desenvolvido por: Borges 2025

🔗 Perfil do LinkedIn
