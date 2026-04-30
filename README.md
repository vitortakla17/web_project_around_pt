# Tripleten web_project_around_pt

GIT HUBPAGES: https://vitortakla17.github.io/web_project_around_pt/

# 🌎 Around The U.S.

Projeto de interface web interativa que simula um perfil de usuário com galeria de cartões de locais visitados. O usuário pode editar suas informações pessoais, adicionar novos locais e interagir com os cartões.

## 📌 Funcionalidades

* ✏️ **Editar perfil**

  * Alterar nome e descrição do usuário através de um pop-up.

* ➕ **Adicionar novos cartões**

  * Criar novos locais com título e imagem via formulário.

* 🖼️ **Visualizar imagens**

  * Abrir imagens em destaque em um modal (popup).

* ❤️ **Curtir cartões**

  * Interagir com os cartões através do botão de like.

* 🗑️ **Excluir cartões**

  * Remover cartões da lista.

## 🧱 Estrutura do Projeto

```
📁 project-root
 ┣ 📁 images        # Imagens usadas no projeto (avatar, logo, etc.)
 ┣ 📁 pages         # Arquivos CSS
 ┣ 📁 scripts       # JavaScript principal (index.js)
 ┣ 📄 index.html    # Estrutura HTML principal
 ┗ 📄 README.md     # Documentação do projeto
```

## 🧩 Tecnologias Utilizadas

* HTML5
* CSS3 (metodologia BEM)
* JavaScript (manipulação de DOM e eventos)

## 📋 Estrutura da Interface

* **Header**: Logo do projeto
* **Profile**:

  * Avatar
  * Nome e descrição
  * Botões de editar e adicionar
* **Cards**:

  * Lista dinâmica de locais
* **Footer**:

  * Informações de copyright

## 🪟 Pop-ups

O projeto possui três pop-ups principais:

1. **Editar perfil**
2. **Adicionar novo local**
3. **Visualização de imagem**

## ⚙️ Como usar

1. Clone o repositório:

```bash
git clone <git@github.com:vitortakla17/web_project_around_pt.git>
```

2. Abra o arquivo `index.html` no navegador.

3. Interaja com a interface:

   * Clique em editar para modificar o perfil
   * Clique em "+" para adicionar novos cartões
   * Clique na imagem para ampliar
   * Use os botões de like e delete nos cartões

## 🚀 Melhorias Futuras

* Validação mais robusta dos formulários
* Integração com backend/API
* Persistência de dados (LocalStorage ou banco de dados)
* Responsividade aprimorada
* Animações e transições mais suaves

## 👨‍💻 Autor

Projeto desenvolvido para prática de manipulação de DOM, eventos e construção de interfaces interativas com JavaScript.

---

💡 *Este projeto faz parte do aprendizado em desenvolvimento web front-end.*
