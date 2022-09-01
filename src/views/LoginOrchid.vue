<template>
<div class="tudo-2">
    <!-- TÍTULO -->
    <form action="">
    <section class="showcase-1">
            <div class="top-box top-box-a-3">
                <h1>LOGIN</h1>
            </div>

            <div class="top-box top-box-b-3">
                <button class="google-btn">Entre com Google</button>
            </div>
        </section>
    <!-- FIM DO TÍTULO -->

    <!-- LINHA -->
        <section class="showcase-2">
            <div class="top-box top-box-a-3">
                <hr color="#B04141">
            </div>

            <div class="top-box top-box-b-3">
                <p>OU</p>
            </div>

            <div class="top-box top-box-c-3">
                <hr color="#B04141">
            </div>
        </section>
    <!-- FIM DA LINHA -->

    <!-- INPUTS -->

        <section class="showcase-4">
            <div class="top-box top-box-a-3">
                <input type="text" placeholder="Nome de usuário ou endereço de e-mail" name="username" class="input-register">
            </div>
        </section>

        <section class="showcase-5">
            <div class="top-box top-box-a-3">
                <input type="text" placeholder="Senha" name="senha" class="input-register">
            </div>
        </section>

        <section class="showcase-7">

            <div class="top-box top-box-b-3">
                <button class="create-acc-btn">Login</button>
            </div>
        </section>

        <section class="showcase-extra">
            <div class="top-box-a-3">
                <a href="#" class="forgot-pass">Esqueceu sua senha?</a>
            </div>
        </section>
        
    <!-- FIM DOS INPUTS -->

    </form>
</div>
</template>

<script>
export default {

}
</script>

<style>

.tudo-2 {
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
    background: linear-gradient(#0c0e10, #24282E);
}

:root {
    --primary: #24282E; 
    --secondary: #0c0e10;
    --light: #ffffff;
    --red: #B04141;
    --shadow: 0 1px 5px rgba(0, 0, 0, 0.8);
}

* {
    margin: 0;
    padding: 0;
}
.tudo-2 {
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: linear-gradient(#0c0e10, #24282E);
}
/* FORM */

form {
    margin: 10rem auto;
    border: solid #B04141;
    border-width: 1px;
    padding: 2rem;
    width: 50rem;
    height: 22rem;
    display: grid;
    justify-content: center;
}


.top-box-a-3 {
    grid-area: top-box-a-3;
}

.top-box-b-3 {
    grid-area: top-box-b-3;
}

.top-box-c-3 {
    grid-area: top-box-c-3;
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
    'top-box-a-3'
    'top-box-b-3';
}

.showcase-1 h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 30px;
    margin: 0;
    color: #ffffff;
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

.showcase-1 .top-box-b-3 {
    display: flex;
    align-items: center;
    justify-content: center;
}

.showcase-2 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: 
    'top-box-a-3 top-box-b-3 top-box-c-3';
}

.showcase-2 .top-box {
    display: flex;
    justify-content: center;
    align-items: center;
}

.showcase-2 .top-box-a-3 {
    display: flex;
    align-items: center;
}

.showcase-2 .top-box-a-3 hr {
    display: flex;
    align-items: center;
    width: 250px;
}

.showcase-2 .top-box-b-3 p {
    color: var(--red);
    font-weight: bold;
}

.showcase-2 .top-box-b-3 {
    display: flex;
    align-items: center;
    justify-content: center;
}

.showcase-2 .top-box-c-3 {
    display: flex;
    align-items: center;
}

.showcase-2 .top-box-c-3 hr {
    display: flex;
    align-items: center;
    width: 250px;
}

.showcase-3 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: 
    'top-box-a-3 top-box-b-3';
}

.showcase-3 .top-box {
    display: flex;
    /* align-items: center; */
    /* justify-content: center; */
}

.showcase-3 .top-box-b-3 {
    display: flex;
    align-items: center;
    justify-content: right;
}

.showcase-3 .top-box-a-3 {
    display: flex;
    align-items: center;
    justify-content: left;
}

.showcase-3 .top-box-a-3 input {
    width: 383px;
}

.showcase-3 .top-box-b-3 input {
    width: 383px;
}

.showcase-4 {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: 
    'top-box-a-3';
    height: 40px;
}

.showcase-4 .top-box {
    display: flex;
    align-items: center;
}

.showcase-4 .top-box-a-3 input{
    width: 780px; 
}

.showcase-5 {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: 
    'top-box-a-3';
    height: 40px;
}

.showcase-5 .top-box {
    display: flex;
    align-items: center;
}

.showcase-5 .top-box-a-3 input{
    width: 780px; 
}

.showcase-6 {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: 
    'top-box-a-3';
}

.showcase-6 .top-box {
    display: flex;
    align-items: center;
}

.showcase-6 .top-box-a-3 input{
    width: 780px; 
}

.showcase-7 {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: 
    'top-box-b-3';
    height: 40px;
}

.showcase-7 .top-box {
    display: flex;
    align-items: center;
}

.showcase-7 .top-box-b-3 {
    display: flex;
    align-items: center;
    justify-content: center;
}

.showcase-7 .top-box-a-3 {
    display: flex;
    align-items: center;
    justify-content: left;
}


.showcase-7 .top-box-a-3 input {
    width: 383px;
}

.showcase-7 .top-box-b-3 .create-acc-btn {
    background-color: var(--red);
    color: var(--light);
    text-decoration: none;
    font-weight: bold;
    font-size: 20px;
    border: 2px;
    width: 383px;
    height: 40px;
}

.showcase-extra {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
    'top-box-a-3';
}

.top-box-a-3 .forgot-pass{
    text-decoration: none;
    color: var(--red);
    font-weight: bold;
    display: flex;
    justify-content: center;
    margin-top: 1rem;
}

.top-box-a-3 .forgot-pass:hover{
    text-decoration: underline;
}
</style>