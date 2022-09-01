<template>
<div class="cadastro">
<form action="">

<!-- TÍTULO -->
    <section class="showcase-1">
        <div class="top-box top-box-a">
            <h1>CADASTRE-SE GRATUITAMENTE</h1>
        </div>

        <div class="top-box top-box-b">
            <button class="google-btn">Cadastre-se com Google</button>
        </div>
    </section>
<!-- FIM DO TÍTULO -->

<!-- LINHA -->
    <section class="showcase-2">
        <div class="top-box top-box-a">
            <hr color="#B04141">
        </div>

        <div class="top-box top-box-b">
            <p>OU</p>
        </div>

        <div class="top-box top-box-c">
            <hr color="#B04141">
        </div>
    </section>
<!-- FIM DA LINHA -->

<!-- INPUTS -->
    <section class="showcase-3">
        <div class="top-box top-box-a">
            <input type="text" placeholder="Nome" name="nome" class="input-register">
        </div>

        <div class="top-box top-box-b">
            <input type="text" placeholder="Sobrenome" name="sobrenome" class="input-register">
        </div>
    </section>

    <section class="showcase-4">
        <div class="top-box top-box-a">
            <input type="text" placeholder="Nome de usuário" name="username" class="input-register">
        </div>
    </section>

    <section class="showcase-5">
        <div class="top-box top-box-a">
            <input type="text" placeholder="Endereço de e-mail" name="email" class="input-register">
        </div>
    </section>

    <section class="showcase-6">
        <div class="top-box top-box-a">
            <input type="text" placeholder="Crie sua senha" name="senha-1" class="input-register">
        </div>
    </section>

    <section class="showcase-7">
        <div class="top-box top-box-a">
            <input type="text" placeholder="Confirme sua senha" name="senha-1" class="input-register">
        </div>

        <div class="top-box top-box-b">
            <button class="create-acc-btn">Criar conta</button>
        </div>
    </section>
</form>
</div>
</template>

<script>
export default {

}
</script>

<style>
.cadastro {
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
    background: linear-gradient(#0c0e10, #24282E);
}

form {
    margin: 10rem auto;
    border: solid #B04141;
    border-width: 1px;
    padding: 2rem;
    width: 50rem;
    height: 30rem;
    display: grid;
    justify-content: center;
}


.top-box-a {
    grid-area: top-box-a;
}

.top-box-b {
    grid-area: top-box-b;
}

.top-box-c {
    grid-area: top-box-c;
}

.input-register {
    border: solid 1px var(--red);
    background-color: var(--primary);
    height: 40px;
}

.showcase-1 {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: 
    'top-box-a'
    'top-box-b';
}

.showcase-1 h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 20px;
    margin: 0;
}

.showcase-1 .google-btn {
    background-color: var(--primary);
    color: var(--light);
    padding: 0.6rem 1.3rem;
    text-decoration: none;
    border: solid 1px;
    border-color: var(--red);
    width: 200px;
    font-weight: bold;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 250px;
}

.showcase-1 .top-box-b {
    display: flex;
    align-items: center;
    justify-content: center;
}

.showcase-2 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: 
    'top-box-a top-box-b top-box-c';
}

.showcase-2 .top-box {
    display: flex;
    justify-content: center;
    align-items: center;
}

.showcase-2 .top-box-a {
    display: flex;
    align-items: center;
}

.showcase-2 .top-box-a hr {
    display: flex;
    align-items: center;
    width: 250px;
}

.showcase-2 .top-box-b p {
    color: var(--red);
    font-weight: bold;
}

.showcase-2 .top-box-b {
    display: flex;
    align-items: center;
    justify-content: center;
}

.showcase-2 .top-box-c {
    display: flex;
    align-items: center;
}

.showcase-2 .top-box-c hr {
    display: flex;
    align-items: center;
    width: 250px;
}

.showcase-3 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: 
    'top-box-a top-box-b';
    height: 40px;
}

.showcase-3 .top-box {
    display: flex;
    /* align-items: center; */
    /* justify-content: center; */
}

.showcase-3 .top-box-b {
    display: flex;
    align-items: center;
    justify-content: right;
}

.showcase-3 .top-box-a {
    display: flex;
    align-items: center;
    justify-content: left;
}

.showcase-3 .top-box-a input {
    width: 383px;
}

.showcase-3 .top-box-b input {
    width: 383px;
}

.showcase-4 {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: 
    'top-box-a';
}

.showcase-4 .top-box {
    display: flex;
    align-items: center;
}

.showcase-4 .top-box-a input{
    width: 780px; 
}

.showcase-5 {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: 
    'top-box-a';
}

.showcase-5 .top-box {
    display: flex;
    align-items: center;
}

.showcase-5 .top-box-a input{
    width: 780px; 
}

.showcase-6 {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: 
    'top-box-a';
    height: 40px;
}

.showcase-6 .top-box {
    display: flex;
    align-items: center;
}

.showcase-6 .top-box-a input{
    width: 780px; 
}

.showcase-7 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: 
    'top-box-a top-box-a top-box-b';
}

.showcase-7 .top-box {
    display: flex;
    align-items: center;
}

.showcase-7 .top-box-b {
    display: flex;
    align-items: center;
    justify-content: right;
}

.showcase-7 .top-box-a {
    display: flex;
    align-items: center;
    justify-content: left;
}


.showcase-7 .top-box-a input {
    width: 383px;
}

.showcase-7 .top-box-b .create-acc-btn {
    background-color: var(--red);
    color: var(--light);
    text-decoration: none;
    font-weight: bold;
    font-size: 20px;
    border: 2px;
    width: 383px;
    height: 40px;
}
</style>