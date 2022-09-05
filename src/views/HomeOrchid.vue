<template>
<div class='tudo-1'>
    <section class="info">
        <div class="bgordem">
          <header class="showcase">
            <h1>A ORDEM TE ESPERA</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              bibendum dictum felis, bibendum bibendum ante ultricies vel.
            </p>
            <router-link to="/cadastro" class="btn">Criar conta</router-link>
            <a href="#" class="btn-two">Criar personagem</a>
            <router-link to="/equipes" class="btn-two">Equipes</router-link>
          </header>
        </div>
      </section>
      <!-- FINAL IMAGEM DO ORDEM -->
      <hr class="linecut" color="#B04141" />
      <!-- TEXTOS E IMAGENS -->
      <section class="inforpg">
        <div class="top-box top-box-a">
          <h1>AFINAL, O QUE É RPG?</h1>
          <p>
            RPG é a sigla para Role Playing Game que significa jogo de
            interpretação de papéis ou personagens. Nesse gênero de jogo os
            jogadores interpretam personagens imaginários em um universo
            fictício, a história desses personagens é guiada ao longo das
            sessões de RPG por um jogador denominado “mestre”. O mestre dita a
            trama, controla os inimigos enfrentados pelos personagens dos outros
            jogadores e interpreta os NPCs.
          </p>
        </div>
        <br />

        <br />
        <div class="top-box top-box-b">
          <img src="@/assets/rpgdemesa.png" alt="" />
        </div>
      </section>
      <hr class="linecut" color="#B04141" />
      <section class="inforpg-2">
        <div class="top-box top-box-a">
          <img src="@/assets/ordem2.jpeg" alt="" />
        </div>

        <div class="top-box top-box-b">
          <h1>ORDEM PARANORMAL RPG</h1>
          <p>
            Nibh ipsum consequat nisl vel pretium lectus quam. Sed egestas
            egestas fringilla phasellus faucibus scelerisque eleifend donec
            pretium. Risus sed vulputate odio ut enim blandit volutpat maecenas
            volutpat. Nunc sed augue lacus viverra vitae congue eu consequat ac.
            Non tellus orci ac auctor. Ante in nibh mauris cursus mattis.
            Facilisi etiam dignissim diam quis enim lobortis scelerisque. Id
            aliquet lectus proin nibh nisl. Elit eget gravida cum sociis natoque
            penatibus. Eu scelerisque felis imperdiet proin fermentum leo vel.
          </p>
        </div>
      </section>
</div>
</template>

<script>
export default {

}
</script>

<style>
.tudo-1 {
    background: linear-gradient(#0c0e10, #24282E);
    color: #fff;
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
}

b {
    font-size: 2.25rem;
}

.main-nav a:hover {
    color: #863131;
}

linha {
    color: #B04141;
}

/* IMAGEM DO ORDEM */

.info {
    display: grid;
    grid-gap: 20px;
    grid-template-areas: 
        'showcase'
}

.showcase {
    grid-area: showcase;
    min-height: 400px;
    padding-left: 3rem;
    padding-right: 3rem;
    background-size: cover;
    background-position: center;
    backdrop-filter: blur(2px);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.8);;
    height: 100%;
    font-weight: bold;
    background-color: rgba(0, 0, 0, 0.5);
}

.showcase h1 {
    font-size: 4rem;
    margin-top: -20rem;
    text-shadow: 0 1px 5px rgba(0, 0, 0, 0.8);;
    color: #fff;
}

.showcase p {
    font-size: 1.25rem;
    color: #fff;
}

.showcase .btn {
    margin-bottom: 10px;
}

.showcase .btn-two {
    margin-bottom: 10px;
}

.bgordem {
    background: url(@/assets/conhecimento.jpeg);
    background-size: cover;
    background-position: center;    
    height: 800px;
}

.inforpg {
    display: grid;
    /* grid-gap: 20px; */
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: 
    'top-box-a top-box-b';
    margin-bottom: -50px;
    align-items: center;
}

.inforpg-2 {
    display: grid;
    /* grid-gap: 20px; */
    grid-template-areas: 
    'top-box-a top-box-b';
    align-items: center;
    grid-template-columns: repeat(auto, minmax(200px, 1fr));
}

.top-box {
    display: grid;
    align-items: center;
    justify-items: center;
    padding: 1.5rem;
}

.top-box-a {
    grid-area: top-box-a;
}

.top-box-b {
    grid-area: top-box-b;
}

.top-box-a h1 {
    font-size: 2.25rem;
    margin-left: 3rem;
    text-shadow: 0 1px 5px rgba(0, 0, 0, 0.8);;
    margin-top: -10px;
}

.top-box-a img {
    margin-right: 3rem;
    margin-left: 3rem;
    margin-bottom: 3rem;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.8);;
    height: auto; 
    width: auto; 
    max-width: 600px; 
    max-height: 600px;
}

.top-box-a p {
    display: flex;
    justify-content: left;
    text-align: justify;
    font-size: 20px;
    margin-left: 3rem;
    line-height: 50px;
}


.top-box-b h1 {
    display: flex;
    justify-content: right;
    font-size: 2.25rem;
    margin-right: 3rem;
    margin-top: -.5rem;
    text-shadow: 0 1px 5px rgba(0, 0, 0, 0.8);;
}

.top-box-b img {
    margin-right: 3rem;
    margin-left: 3rem;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.8);;
    height: auto; 
    width: auto; 
    max-width: 800px; 
    max-height: 800px;
}

.top-box-b p {
    display: flex;
    justify-content: right;
    font-size: 0.938rem;
    margin-right: 3rem;
    /* margin-left: 3rem; */
    text-align: justify;
    line-height: 3.125;
    font-size: 20px;
}
h1 {
    margin-bottom: 40px;
}
.linecut {
    color: #B04141; 
    width: 1200px;
    margin: 30px auto;
    display: flex;
    justify-content: center;
}

.btn {
    background-color: #B04141;
    color: #fff;
    padding: 0.6rem 1.3rem;
    text-decoration: none;
    border: 0;
    width: 200px;
    margin-top: 30px;
}

.btn-two {
    background-color: rgba(12, 14, 16, .5);
    color: #fff;
    padding: 0.6rem 1.3rem;
    text-decoration: none;
    border: solid;
    border-color: #B04141;
    border-width: 1px;
    width: 200px;
}

.logo img {
    width: 180px;
    height: auto;
    padding: 0px;
}
</style>