<template>
    <div class="sobrenos">
    <section class="sobrenos-section">
            <div class="element top-box-a-sobrenos">
                <h1>SOBRE NÓS:</h1>
                <p>O Orchid Project é um trabalho desenvolvido pelos alunos Alisson Gabriel Santos, Caio Schmitz e Maria Eduarda Nichelle Ferreira do terceiro ano do Técnico em Informática Integrado ao Ensino Médio do Instituto Federal Catarinense Campus Araquari para a matéria de Projeto Integrador.
                    O Orchid Project tem como objetivo facilitar o demorado processo de criação de fichas de RPG baseadas no sistema de Ordem Paranormal, tornando a experiência de jogar Ordem Paranormal RPG acessível para todos.
                O site automatiza os cálculos dos atributos e perícias do novo sistema e disponibiliza ferramentas para que o usuário possa jogar sem a necessidade de possuir acessórios físicos, como, os dados.
                </p>
            </div>

            <div class="element top-box-b-sobrenos">
                <img src="@/assets/Logo_vertical_branco.png" alt="">
            </div>
    </section>
    <hr class="linha-sobrenos" color="#B04141"/>
    <section class="contato-section">
            <div class="element top-box-a-contato">
            </div>

            <div class="element top-box-b-contato">
            </div>

            <div class="top-box-c-contato">
            </div>

    </section>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.linha-sobrenos {
    background-color: #B04141;
    width: 1600px;
    display: flex;
    align-items: center;
    margin-left: 10rem;
    margin-top: 5rem;
}
.sobrenos {
    box-sizing: border-box;
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
    color: #ffffff;
    background: linear-gradient(#0c0e10, #24282E);
    margin: 0px 0px;
    line-height: 1.4;
    position: relative;
    top: 0px;
    }

.sobrenos-section {
    display: grid;
    margin-left: 5rem;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: 
    'top-box-a-sobrenos top-box-b-sobrenos';
    /* height: 50rem; */
    padding-top: 7rem;
}


.element {
    display: grid;
    padding: 0;
    margin-top: -3rem;
}
.contato-section {
    display: grid;
    margin-left: 5rem;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: 
    'top-box-a-contato top-box-b-contato top-box-c-contato';
    height: 50rem;
    margin-top: 0;
}

.top-box-a-contato {
    width: 500px;
    height: 300px;
    grid-area: top-box-a-contato;
    background-image: url(@/assets/github-logo.png);
    background-position: center;
    background-size: 50%;
    background-repeat: no-repeat;
}

.top-box-b-contato {
    grid-area: top-box-b-contato;
    width: 500px;
    height: 300px;
    background-image: url(@/assets/instagram-logo.png);
    background-position: center;
    background-size: 45%;
    background-repeat: no-repeat;
}

.top-box-c-contato {
    grid-area: top-box-c-contato;
    width: 500px;
    height: 300px;
    background-image: url(@/assets/twitter-logo.png);
    background-position: center;
    background-size: 50%;
    background-repeat: no-repeat;
}

.top-box-a-contato-2 {
    display: flex;
    justify-content: flex-end;
}

.top-box-a-contato-1 {
    display: flex;
    justify-content: flex-end;
}

.top-box-a-sobrenos {
    grid-area: top-box-a-sobrenos;
}

.top-box-a-sobrenos h1 {
    font-weight: bold;
    display: flex;
    justify-content: left;
    font-size: 2.25rem;
    align-items: center
}

.top-box-a-sobrenos p {
    line-height: 3rem;
    text-align: justify;
    display: flex;
    justify-content: left;
    font-size: 20px;
}

.top-box-b-sobrenos {
    display: grid;
    grid-area: top-box-b-sobrenos;
    align-items: center;
    justify-content: center;
}

.top-box-b-sobrenos img {
    height: 500px;
    width: auto;
    display: flex;
    justify-content: right;
    align-items: baseline;
}
</style>