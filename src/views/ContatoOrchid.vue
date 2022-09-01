<template>
<div class="contato">
    <section class="sobrenos">
        <div class="element top-box-a">
            <h1>CONTATO (INSTAGRAM):</h1>
            <ul class="contact-list">
                <li><a href="https://www.instagram.com/aliso_gab/">ALISSON GABRIEL SANTOS</a></li>
                <li><a href="https://www.instagram.com/caio_mitz/">CAIO SCHMITZ</a></li>
                <li><a href="https://www.instagram.com/maria.nichelle/">MARIA EDUARDA NICHELLE FERREIRA</a></li>
            </ul>
        </div>

        <div class="element top-box-b">
            <img style="filter: invert(100%) sepia(0%) saturate(7488%) hue-rotate(143deg) brightness(100%) contrast(88%);" class="contato-image" src="/images/support.png" alt="">
        </div>
    </section>
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

.sobrenos {
    display: grid;
    margin-top: 3rem;
    margin-left: 2rem;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: 
    'top-box-a top-box-b';
    align-items: center;
    justify-content: center;
    height: 50rem;
}

.element {
    display: grid;
    padding: 1.5rem;
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
}

.top-box-a p {
    line-height: 3rem;
    text-align: justify;
    display: flex;
    justify-content: left;
    font-size: 20px;
}

.top-box-a .contact-list {
    list-style: none;
    text-decoration: underline;
    margin-left: -2rem;
}

.contact-list a{
    font-size: 30px;
}

.top-box-a a {
    text-decoration: none;
    color: var(--light);
    font-weight: bold;
}

.top-box-b {
    display: flex;
    grid-area: top-box-b;
    align-items: center;
    justify-content: center;
}

.top-box-b .contato-image {
    height: 500px;
    width: auto;
    display: flex;
    justify-content: right;
    align-items: baseline;
    fill: #ffffff;
}
</style>