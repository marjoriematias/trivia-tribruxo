# Índice
- Sobre 
- Tecnologias utilizadas
- Processo de criação


---

## Sobre - Trivia Tribruxo 🧹

O projeto é uma Trivia, que é um tipo de jogo, geralmente no âmbito de uma competição, no qual se coloca uma série de perguntas cujas respostas devem ser escolhidas entre diferentes opções pré-determinadas.

**O tema da Trivia escolhido foi da saga de filmes Harry Potter.**

---

## Tecnologias utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS](https://curriculum.laboratoria.la/pt/topics/css/01-css/01-intro-css)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Data_structures#valores_primitivos)

---

## Processo de criação

A primeira página index.html contém a introdução para que o jogador inicie a Trivia, meu pensamento foi utilizar somente a propriedade a href='' para o jogador poder prosseguir para a próxima página. 
<br><br>
Já na página do quiz, foram utilizadas propriedades **div** para poder passar os **inputs**, onde o jogador seleciona qual é a reposta que ele acha correta. Para apresentar o resultado da quantidade de respostas corretas, utilizei um **input** com o **metódo onclick** que ao ser clicado, chama uma **function()** onde é feita a verificação se o **input** com o **id** de resposta correta está selecionado ou não, caso esteja é adicionado +1 através da **var score**, da seguinte forma **score++**.

Fiz com que o **header** da página retornasse para a tela inicial e um botão para recomeçar o jogo.

>Desenvolvido por Marjorie Matias. 💛