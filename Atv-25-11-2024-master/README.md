MenuComponent.js

Quais importações são usadas?

import React, { useState } from 'react';
Importa o React e o hook useState do React para gerenciar o estado do componente.
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
Importa componentes específicos do Reactstrap usados para construir o layout do cartão:
Card: Componente principal que estrutura o cartão.
CardImg: Exibe a imagem dentro do cartão.
CardImgOverlay: Usado para sobrepor um conteúdo (geralmente texto) sobre a imagem do cartão.
CardText: Exibe texto dentro do cartão.
CardBody: Contém o corpo do cartão, onde o conteúdo é inserido.
CardTitle: Exibe o título dentro do cartão.

Existem componentes? O que eles estão fazendo?

Sim, o componente principal é o Menu.
Menu: Mapeia a lista de pratos e exibe um cartão para cada prato. Cada prato é representado visualmente por um cartão com sua imagem e nome.
Quando um prato é selecionado, o estado do prato selecionado é atualizado, e os detalhes desse prato são exibidos em um cartão separado.
Qual é o propósito do onDishSelect no projeto?
A função onDishSelect é chamada quando o usuário clica em um prato do menu. Ela atualiza o estado do prato selecionado (selectedDish), permitindo que o componente exiba os detalhes desse prato na interface, em um cartão específico.

Para que serve o renderDish?

A função renderDish é responsável por renderizar os detalhes de um prato selecionado.
Se um prato foi selecionado (ou seja, o prato não é null), ele exibe um cartão com a imagem, nome e descrição do prato.
Caso contrário, a função não faz nada e não renderiza nada.

Para que serve props.dishes.map?

A função props.dishes.map percorre a lista de pratos passada como prop para o componente Menu.
Para cada prato, ela cria e exibe um Card com a imagem e o nome do prato.
Ao clicar no prato, a função onDishSelect é chamada para exibir os detalhes do prato selecionado.
pratos.js

Quais são as propriedades?

Cada objeto de prato possui as seguintes propriedades:
id: Um identificador único para o prato.
name: O nome do prato.
image: O caminho para a imagem do prato.
category: A categoria do prato (por exemplo, “prato principal”, “aperitivo”).
label: Um rótulo opcional que pode ser exibido (por exemplo, "Hot", "New").
price: O preço do prato.
description: Uma descrição detalhada do prato.
comments: Um array de objetos com os comentários dos usuários sobre o prato. Cada comentário possui:
id: Identificador único do comentário.
rating: Avaliação do prato (por exemplo, de 1 a 5).
comment: O texto do comentário.
author: Nome do autor do comentário.
date: Data do comentário.

Que tipo de dado é usado?

O tipo de dado usado para armazenar os pratos é uma matriz de objetos.
Cada objeto representa um prato e contém diferentes tipos de dados como:
Strings (name, category, description, etc.).
Números (id, price).
Arrays de objetos (comments).
App.js

Para que servem os const [dishes]?

A constante dishes é um estado do componente App. Ela contém os dados dos pratos, inicializados com os dados importados do arquivo DISHES.
Esse estado não é editado diretamente, mas é passado como uma prop para o componente Menu, permitindo que ele exiba os pratos.
Explique como funciona Pratos={dishes}.
O componente Menu é renderizado dentro de App.js, e a constante dishes (que contém a lista de pratos) é passada como prop para o componente Menu.
No componente Menu, a prop dishes é usada para acessar os dados dos pratos e gerar um cartão para cada prato.
Quando um prato é clicado, a função onDishSelect atualiza o estado de selectedDish, permitindo que os detalhes do prato selecionado sejam exibidos em um cartão separado.
