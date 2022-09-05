<template>
<div class="entrarequipe">
    <!-- TÍTULO -->
    <form action="" class="form-entrarequipe">
        <div class="showcase-entrarequipe-1">
            <div class="top-box top-box-a-entrarequipe">
                <h1>Entrar em equipe</h1>
            </div>

            <div class="top-box top-box-b-entrarequipe">
                <input type="text" class="input-entrarequipe" placeholder="Código da equipe" name="entrarequipe">
            </div>

            <div class="top-box top-box-c-entrarequipe">
                <button class="entrarequipe-btn">Entrar em equipe</button>
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

.entrarequipe {
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


.showcase-entrarequipe-1 h1{
    color: #fff;
    font-weight: bold;
    margin: 0;
}

/* FORM */

.form-entrarequipe {
    margin: 10rem auto;
    border: solid #B04141;
    border-width: 1px;
    padding: 2rem;
    width: 21.625rem;
    height: 14.75rem;
    display: grid;
    justify-content: center;
}

.top-box-a-entrarequipe {
    grid-area: top-box-a-entrarequipe;
}

.top-box-a-entrarequipe {
    grid-area: top-box-a-entrarequipe;
}

.top-box-a-entrarequipe {
    grid-area: top-box-a-entrarequipe;
}

.input-entrarequipe {
    border: solid 1px var(--red);
    background-color: var(--primary);
    height: 40px;
    width: 100%;
}

.showcase-entrarequipe-1 {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: 
    'top-box-a-entrarequipe'
    'top-box-b-entrarequipe'
    'top-box-c-entrarequipe';
}

.showcase-entrarequipe-1 .top-box-c-entrarequipe .entrarequipe-btn {
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