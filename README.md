## Atividade Full-Stack Escola Avaliação

## Como executar o sistema

### **Pré-requisitos**

* Node.js 18+
* MySQL 8+
* Navegador web (Chrome, Edge, Firefox, etc.)

---

### **Instalação e execução**

#### Clonar o repositório

```bash
git clone https://github.com/GabrielBZanon/aula07.git
cd aula07/api
```

#### Instalar dependências

```bash
npm install
```

#### Configurar o banco de dados

Crie um arquivo `.env` dentro da pasta `api` com o conteúdo:

```env
DATABASE_URL="mysql://usuario:senha@localhost:3306/turmas_db"
```

Em seguida, rode o comando:

```bash
npx prisma migrate dev --name init
```

#### Executar o servidor

```bash
npm run dev
```

O back-end será iniciado em:

```
http://localhost:3000
```

#### Executar o front-end

Abra o arquivo `web/index.html` em um navegador, ou hospede localmente usando o Live Server (VS Code).

---

## Endpoints da API (para testes no Insomnia)

| Método     | Rota           | Descrição                                 |
| ---------- | -------------- | ----------------------------------------- |
| **POST**   | `/professores` | Criar novo professor                      |
| **GET**    | `/professores` | Listar todos os professores               |
| **POST**   | `/turmas`      | Criar nova turma                          |
| **GET**    | `/turmas`      | Listar todas as turmas                    |
| **DELETE** | `/turmas/:id`  | Excluir turma (caso não tenha atividades) |
| **POST**   | `/atividades`  | Criar nova atividade                      |
| **GET**    | `/atividades`  | Listar atividades por turma               |

---

## Testes no Insomnia (JSON de exemplo)

### Criar Professor

```json
{
  "nome": "Carlos Almeida",
  "email": "carlos@escola.com",
  "senha": "123456"
}
```

### Criar Turma

```json
{
  "nome": "Turma 3º Ano A",
  "professorId": 1
}
```

### Criar Atividade

```json
{
  "descricao": "Fazer resumo do capítulo 2 de Matemática",
  "turmaId": 1
}
```

---

## 🧾 Entregas do Projeto

| Nº | Entrega                                | Tipo           | Pasta / Arquivo          |
| -- | -------------------------------------- | -------------- | ------------------------ |
| 1  | Diagrama de caso de uso                | Imagem         | `./docs/caso_de_uso.png` |
| 2  | DER (Diagrama Entidade Relacionamento) | Imagem         | `./docs/der.png`         |
| 3  | Script SQL / Migração                  | Banco de dados | `./docs/banco.sql`       |
| 4  | Tela de Login                          | Front-end      | `./web/index.html`       |
| 5  | Tela principal do professor            | Front-end      | `./web/principal.html`   |
| 6  | Cadastro de turma                      | Front-end      | `./web/principal.html`   |
| 7  | Listar turmas                          | Front-end      | `./web/principal.html`   |
| 8  | Exclusão de turma                      | Front-end      | `./web/principal.html`   |
| 9  | Tela de atividades da turma            | Front-end      | `./web/turma.html`       |
| 10 | Listar atividades da turma             | Front-end      | `./web/turma.html`       |
| 11 | Cadastro de atividade                  | Front-end      | `./web/turma.html`       |
| 12 | Logout                                 | Front-end      | `./web/*.html`           |
| 13 | Lista de requisitos e tutorial         | Documentação   | `README.md`              |

---

## Requisitos de Infraestrutura

| Item                                | Descrição                                                   |
| ----------------------------------- | ----------------------------------------------------------- |
| **SGBD**                            | MySQL 8.0+                                                  |
| **Servidor de Aplicação**           | Node.js 18+ com Express                                     |
| **Sistema Operacional recomendado** | Windows 10+ ou Ubuntu 22.04+                                |
| **Linguagens utilizadas**           | JavaScript (Node.js no back-end e JS/HTML/CSS no front-end) |
| **ORM**                             | Prisma ORM                                                  |
| **Ferramentas de Teste**            | Insomnia / Postman                                          |
| **Editor recomendado**              | Visual Studio Code                                          |

---

## Autor

**Gabriel B. Zanon**
Desenvolvido para fins educacionais no curso técnico do SENAI — *Aula 07 - Avaliação Prática.*

---

## Conclusão

O sistema cumpre todos os requisitos propostos na avaliação: autenticação, cadastro e listagem de turmas, registro de atividades e logout funcional.
A arquitetura é simples, eficiente e pode ser expandida futuramente para incluir autenticação JWT, controle de permissões e integração com banco de dados remoto.

```

---

Quer que eu adicione também um **tópico final com prints (ou placeholders) das telas** — login, principal e atividades — para deixar o README visualmente mais completo para o GitHub?
```
