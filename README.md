# Projeto Fullstack - Consulta Tabela Fipe

Projeto desenvolvido para a disciplina **Programação Web Fullstack**, com foco na criação da camada **Frontend** usando **React.js**, **AJAX** e consumo de uma **API JSON aberta**.

## Objetivo do projeto

A aplicação permite consultar o valor médio de veículos utilizando a API pública da Tabela Fipe. O usuário seleciona a marca, o modelo e o ano do veículo. Depois disso, o sistema mostra o preço médio, código Fipe, combustível e mês de referência.

## Tecnologias utilizadas

- React.js
- Vite
- JavaScript
- Axios
- Bootstrap
- React Bootstrap
- Context API
- Hook `useMemo`

## API JSON utilizada

API pública da Tabela Fipe:

```txt
https://parallelum.com.br/fipe/api/v1/carros
```

A API é usada para buscar:

- marcas de veículos;
- modelos da marca selecionada;
- anos disponíveis para o modelo;
- valor final do veículo selecionado.

## Funcionalidades

- Listagem de marcas de veículos.
- Busca de modelos a partir da marca selecionada.
- Busca de anos a partir do modelo selecionado.
- Consulta do preço médio do veículo.
- Validação de campos obrigatórios.
- Mensagens de erro para campos não preenchidos.
- Mensagens de erro caso a API não responda corretamente.
- Comunicação entre componentes usando Context API.
- Interface estilizada com React Bootstrap.

## Requisitos do professor atendidos

| Requisito | Como foi atendido |
|---|---|
| React.js | Projeto criado com React e Vite |
| SPA | A aplicação funciona em uma única página |
| API JSON aberta | Uso da API pública da Tabela Fipe |
| AJAX | Requisições feitas com Axios |
| Busca com parâmetros | Marca, modelo e ano são enviados para a API |
| Validação de campos obrigatórios | O sistema mostra mensagens antes da consulta |
| Mensagens de erro | Há mensagens para validação e falha na API |
| Context API ou Redux | Foi usada Context API no `FipeContext.jsx` |
| Hook obrigatório | Foi usado `useMemo` no componente `Formulario.jsx` |
| Biblioteca externa | Foram usados Bootstrap e React Bootstrap |
| Estrutura do projeto | Componentes em `src/components` e contexto em `src/contexts` |

## Hook escolhido

O hook escolhido foi o **useMemo**.

Ele foi utilizado no arquivo:

```txt
src/components/Formulario.jsx
```

O `useMemo` foi usado para organizar a lista de marcas em ordem alfabética e também para verificar se o formulário está completo. Assim, esses cálculos só são refeitos quando os dados necessários mudam.

## Context API

A Context API foi usada no arquivo:

```txt
src/contexts/FipeContext.jsx
```

Esse contexto centraliza os dados e funções principais da aplicação, como:

- lista de marcas;
- lista de modelos;
- lista de anos;
- resultado da consulta;
- estado de carregamento;
- mensagens de erro da API;
- funções de busca.

Com isso, os componentes conseguem acessar os dados sem precisar passar várias propriedades manualmente.

## Como executar o projeto

### 1. Instalar as dependências

```bash
npm install
```

### 2. Rodar o projeto em modo desenvolvimento

```bash
npm run dev
```

Depois, abra no navegador o endereço mostrado no terminal. Normalmente será:

```txt
http://localhost:5173
```

### 3. Gerar pacote de produção

```bash
npm run build
```

Esse comando gera a pasta:

```txt
dist
```

Essa pasta pode ser usada para publicar o projeto em um servidor web, como Vercel, Netlify ou GitHub Pages.

## Como testar

1. Abra o projeto no navegador.
2. Selecione uma marca.
3. Selecione um modelo.
4. Selecione o ano.
5. Clique em **Consultar Preço**.
6. Confira se o resultado aparece na tela.

Também é possível testar a validação clicando no botão sem preencher todos os campos. O sistema deve mostrar uma mensagem avisando o que falta selecionar.

## Estrutura principal

```txt
src/
├── components/
│   ├── Formulario.jsx
│   └── Resultado.jsx
├── contexts/
│   └── FipeContext.jsx
└── main.jsx
```

## Autor

Projeto acadêmico desenvolvido para a disciplina de Programação Web Fullstack.
