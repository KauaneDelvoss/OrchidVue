<template>
<div class="criarequipe">
    <!-- TÍTULO -->
    <form action="" class="form-criarequipe">
        <div class="showcase-criarequipe-1">
            <div class="top-box top-box-a-criarequipe">
                <h1>Criação de equipe</h1>
            </div>

            <div class="top-box top-box-b-criarequipe">
                <input type="text" class="input-criarequipe" placeholder="Nome da equipe" name="criarequipe">
            </div>

            <div class="top-box top-box-c-criarequipe">
                <button class="criarequipe-btn">Criar equipe</button>
            </div>
        </div>
    </form>
</div>
</template>

<script>
export default {

}
</script>

<style>
:root {
    --primary: #24282E; 
    --secondary: #0c0e10;
    --light: #ffffff;
    --red: #B04141;
    --shadow: 0 1px 5px rgba(0, 0, 0, 0.8);
}

.criarequipe {
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
    background: linear-gradient(#0c0e10, #24282E);
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
}

* {
    margin: 0;
    padding: 0;
}


.showcase-criarequipe-1 h1{
    color: #fff;
    font-weight: bold;
    margin: 0;
}

/* FORM */

.form-criarequipe {
    margin: 10rem auto;
    border: solid #B04141;
    border-width: 1px;
    padding: 2rem;
    width: 21.625rem;
    height: 14.75rem;
    display: grid;
    justify-content: center;
}

.top-box-a-criarequipe {
    grid-area: top-box-a-criarequipe;
}

.top-box-a-criarequipe {
    grid-area: top-box-a-criarequipe;
}

.top-box-a-criarequipe {
    grid-area: top-box-a-criarequipe;
}

.input-criarequipe {
    border: solid 1px var(--red);
    background-color: var(--primary);
    height: 40px;
    width: 100%;
}

.showcase-criarequipe-1 {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: 
    'top-box-a-criarequipe'
    'top-box-b-criarequipe'
    'top-box-c-criarequipe';
}

.showcase-criarequipe-1 .top-box-c-criarequipe .criarequipe-btn {
    background-color: var(--red);
    color: var(--light);
    text-decoration: none;
    /* font-weight: bold; */
    font-size: 15px;
    border: 2px;
    width: 130px;
    height: 40px;
}
</style>