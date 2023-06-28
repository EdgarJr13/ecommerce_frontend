# Ecommerce Frontend

Este é o frontend do sistema de ecommerce desenvolvido por mim como parte do desafio SuperSim Challenge.

## Funcionalidades

- Exibir lista de produtos disponíveis
- Criar novos produtos
- Editar produtos existentes
- Excluir produtos

## Tecnologias utilizadas

- Vue.js: framework JavaScript para construção de interfaces de usuário
- Vuetify: biblioteca de componentes para Vue.js com Material Design
- Axios: cliente HTTP para realizar requisições ao backend

## Requisitos

- Node.js (versão 12 ou superior)
- NPM (gerenciador de pacotes do Node.js)

## Como executar o projeto

1. Clone o repositório para a sua máquina local:
git clone https://github.com/EdgarJr13/ecommerce_frontend.git

2. Navegue até o diretório do projeto:
cd ecommerce-frontend

3. Instale as dependências do projeto:
npm install

4. Inicie o servidor de desenvolvimento:
npm run serve

5. Acesse a aplicação no navegador:
Abra o navegador e visite o seguinte endereço: `http://localhost:8081`

## Como usar a aplicação

- Acesse a página "Gerenciar Produtos" para visualizar, editar e excluir produtos existentes.
- Clique no botão "+" para adicionar um novo produto ao estoque.
- Ao clicar no botão "Editar" de um produto, um Dialog será aberto para permitir a edição dos campos do produto.
- Ao clicar no botão "Deletar" de um produto, o produto será excluído.
- Utilize a barra de pesquisa da página inicial para buscar um produto em específico.
- A funcionalidade de adicionar produtos ao carrinho será implementada futuramente.

## Implementações futuras
Devido ao tempo para entrega do projeto, alguns estudos meus não foram aplicados pois não haveria tempo hábil para os mesmos. As implementações seriam:


- Implementação de funcionalidade para gerar pedidos, utilizando a dinâmica de "carrinho" para guardar os produtos desejados para um eventual fechamento de pedido. Avalio que mais um dia seria suficiente para a implementação.
- Utilização de Alerts mais robustos, do próprio Vuetify, em detrimento aos Aletrs nativos do JavaScript utilizados. Também avalio que mais um dia de desenvolvimento seria suficiente para o mesmo.

## Contribuição

Contribuições são bem-vindas! Se você encontrar algum problema ou tiver alguma sugestão, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
