# Meu Front-end em React + Vite

Este projeto faz parte da disciplina **Desenvolvimento Front-end avançado**.

O objetivo é desenvolver o Front-end baseado na  interface prototipada no **FIGMA**, 
utilizando o **REACT** e explorando a componentização.

A aplicação é um sistema de controle de despesas pessoais.

## Recursos utilizados

### Páginas:
    
- **Home** 

    Apresentada ao iniciar a aplicação.
    
    Lista todas as despesas já cadastradas na base de dados.
    
    Tem botões para chamar as páginas de adicionar, excluir ou alterar uma despesa.


- **AdicionaDespesa** 

    Inclui uma nova despesas. 
    
    É acessada ao clicar no botão Adicionar da página Home.

    
- **AlteraDespesa**

    Altera uma despesa existente.
    
    É acessada ao clicar o botão Alterar da página Home.

    
 - **ExcluiDespesa**

    Exclui uma despesa  existente.
  
    É acessada ao clicar no botão Excluir da página Home.

### Componentes

São utilizados componentes que são reutilizados nas páginas.


- **Cabeçalho** 

    Utilizado em todas as páginas


- **BotãoAdicionar** 

    Utilizado na página Home 
    

- **BotãoGeral** 

    Utilizado nas páginas AdicionaDespesa e AlteraDespesa


- **BotãoVolta** 

    Utilizado nas páginas AdicionaDespesa e AlteraDespesa


- **FormSucesso** 

    Utilizado nas páginas AdicionaDespesa,  AlteraDespesa e ExcluiDespesa


- **FormConfirma** 

    Utilizado na página ExcluiDespesa
    
### Recursos do REACT

- **useNavigate**


- **useState**


- **useEffect**

### Hooks
Foram criados dois hooks: 

- **useDespesaContex**
 

- **useFetch**


### Servidor Json

Foi criado um servidor JSON para servir como base de dados do sistema.

## Como instalar e executar

Será necessário ter o [Nodejs, ou o npm,](https://nodejs.org/en/download/) instalado. 

Após clonar o repositório, é necessário ir ao diretório raiz desse projeto pelo terminal 
para poder executar os comandos descritos abaixo.

### Criar o projeto com Vite

```
$ npm create vite@latest
```

Execute o script vite acima e preencha as opçoes:

```
**? Project name: »** vite-project
    Preencha o nome do projeto controle_despesas no lugar de vite-project
    e tecle ENTER
```

```
** ? Select a framework: »** - Use arrow-keys. Return to submit.
     Com as setas, aponte para React 
     e tecle ENTER
```

```
** ? Select a variant: »** - Use arrow-keys. Return to submit.
    Com as setas, aponte para JavaScript
    e **tecle ENTER       
```

Após criar o projeto, mudar para a pasta controle_despesa criada

```
cd controle_despesas
```

### Baixar a aplicação do GitHub


### Instalar as dependências/bibliotecas - NPM

Instale as dependências/bibliotecas, descritas no arquivo `package.json`.

Uma pasta chamada `node_modules` será criada.

```
npm install
```

### Instalar o react-router
```
npm i react-router-dom
```

### Executar o Front-end

```
npm run dev
```

Abra o [http://localhost:5173/](http://localhost:5173) no navegador.



## instalar a API JSON 

Apos a instalação do Front-end, **abra outra janela** (terminal ou Windows PowerShell) e
mude para o diretório da aplicação **controle-despesas** e execute o comando abaixo.

```
npm i json-server
```

No arquivo **package.json** na seção **"script"** inserir a linha:

**"server": "json-server --watch data/db.json"**

### Executar o servidor JSON

```
npm run server
```

=> consigo acessar o meu arquivo no endereço =>  http://localhost:3000/despesas






