Descrição do Projeto
O objetivo desta atividade é adicionar um novo componente ao seu aplicativo React para exibir os detalhes de um prato selecionado e seus comentários associados. O novo componente, denominado DishDetailComponent, será responsável por exibir informações detalhadas sobre o prato, como seu nome, descrição, imagem, e uma lista de comentários de usuários. A interface será responsiva, adaptando-se a diferentes tamanhos de tela, e utilizará componentes do Bootstrap/Reactstrap, como Card para exibir as informações do prato e uma lista para os comentários.

Objetivo
A tarefa é adicionar o componente DishDetailComponent ao seu aplicativo React. O componente será utilizado para exibir:

Detalhes do prato selecionado, como nome, descrição e imagem, dentro de um cartão estilizado usando o componente Card do Reactstrap.
Comentários sobre o prato, com informações sobre o autor e a data do comentário.
O layout deve ser responsivo, ajustando-se automaticamente em diferentes tamanhos de tela usando as classes do Bootstrap.
Requisitos da Tarefa
Tarefa 1: Criar o Componente DishDetailComponent
Estrutura do Componente:

Criar um novo arquivo chamado DishDetailComponent.js na pasta components.
Definir o componente DishDetail para renderizar as informações do prato selecionado e os comentários passados como props.
Responsividade:

Utilizar as classes do Bootstrap para tornar o layout responsivo:
Para telas pequenas (xs e sm), o conteúdo deve ocupar toda a largura da tela (12 colunas).
Para telas médias e grandes (md e acima), o conteúdo deve ocupar 5 colunas.
Exibição de Conteúdo:

O prato e os comentários devem ser exibidos lado a lado em telas maiores.
Para telas menores, os detalhes do prato e os comentários devem ser empilhados verticalmente.
Tarefa 2: Exibir os Detalhes do Prato com o Card do Reactstrap
Função renderDish:

Criar a função renderDish dentro do componente DishDetail para renderizar os detalhes do prato utilizando o Card do Reactstrap.
Exibir o nome do prato como título do cartão, a descrição e a imagem do prato.
Verificação do Prato:

Se o prato não for válido (nulo ou indefinido), o componente deve retornar uma div vazia.
Se o prato for válido, o componente exibe os detalhes do prato usando o Card.
Tarefa 3: Exibir a Lista de Comentários
Função renderComments:

Criar a função renderComments para renderizar os comentários relacionados ao prato.
Exibir cada comentário com o texto, nome do autor e a data. Os comentários devem ser organizados usando a classe de lista sem estilo do Bootstrap.
Verificação de Comentários:

Se não houver comentários, o componente deve retornar uma div vazia.
Caso contrário, a lista de comentários deve ser exibida com os dados relevantes de cada um.
Estrutura do Projeto
O projeto deve ter a seguinte estrutura de arquivos:

src/
components/
DishDetailComponent.js - Componente que exibe os detalhes do prato e seus comentários.
MenuComponent.js - Componente que exibe o menu de pratos e gerencia a seleção de um prato.
App.js - Arquivo principal que importa e utiliza o MenuComponent e DishDetailComponent.
Tecnologias Utilizadas
React: Framework JavaScript para construir a interface do usuário.
Reactstrap: Biblioteca de componentes React que utiliza o Bootstrap para fornecer componentes prontos para uso, como Card e CardImg.
Bootstrap: Framework de design que oferece um sistema de grid responsivo e classes utilitárias para facilitar a construção de layouts.
Como Executar o Projeto

Primeiro, clone o repositório ou baixe o código-fonte do projeto.

```js
git clone <URL_DO_REPOSITORIO>
cd <diretorio_do_projeto>
Instale as dependências necessárias usando o npm:
```

```js
npm install
2. Executando a Aplicação
Após a instalação das dependências, inicie a aplicação com o comando:
```

```js
npm start
Isso iniciará o servidor de desenvolvimento, e você poderá acessar a aplicação no navegador através de:
```
Conclusão
Com a conclusão dessa atividade, você terá implementado um componente React que exibe os detalhes de um prato e os comentários relacionados a ele. O layout será responsivo e se adaptará a diferentes tamanhos de tela, utilizando os recursos do Bootstrap e Reactstrap. A interação com o componente será dinâmica, passando os dados via props para exibição correta dos detalhes e comentários.