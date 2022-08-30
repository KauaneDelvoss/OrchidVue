<template>
    <div class="tudo-3">
    <section class="sobrenos">
            <div class="element top-box-a">
                <h1>SOBRE NÓS:</h1>
                <p>O Orchid Project é um trabalho desenvolvido pelos alunos Alisson Gabriel Santos, Caio Schmitz e Maria Eduarda Nichelle Ferreira do terceiro ano do Técnico em Informática Integrado ao Ensino Médio do Instituto Federal Catarinense Campus Araquari para a matéria de Projeto Integrador.
                    O Orchid Project tem como objetivo facilitar o demorado processo de criação de fichas de RPG baseadas no sistema de Ordem Paranormal, tornando a experiência de jogar Ordem Paranormal RPG acessível para todos.
                O site automatiza os cálculos dos atributos e perícias do novo sistema e disponibiliza ferramentas para que o usuário possa jogar sem a necessidade de possuir acessórios físicos, como, os dados.
                </p>
            </div>

            <div class="element top-box-b">
                <img src="@/assets/Logo_vertical_branco.png" alt="">
            </div>
        </section>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.tudo-3 {
    box-sizing: border-box;
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
    color: #ffffff;
    background: linear-gradient(#0c0e10, #24282E);
    margin: 0px 0px;
    line-height: 1.4;
    position: relative;
    top: 0px;
    }

.sobrenos {
    display: grid;
    margin-left: 2rem;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: 
    'top-box-a top-box-b';
    height: 50rem;
}

.element {
    display: grid;
    padding: 0;
    margin-top: -3rem;
}

.top-box-a {
    grid-area: top-box-a;
}

.top-box-a h1 {
    font-weight: bold;
    display: flex;
    justify-content: left;
    font-size: 2.25rem;
    align-items: center
}

.top-box-a p {
    line-height: 3rem;
    text-align: justify;
    display: flex;
    justify-content: left;
    font-size: 20px;
}

.top-box-b {
    display: flex;
    grid-area: top-box-b;
    align-items: center;
    justify-content: center;
}

.top-box-b img {
    height: 500px;
    width: auto;
    display: flex;
    justify-content: right;
    align-items: baseline;
}
</style>