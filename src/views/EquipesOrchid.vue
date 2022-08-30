<template>
<div class="tudo">
    <section class="info">
        <div class="bgordem">
            <div class="top-box top-box-a">
                <a href="#">CRIAR UMA EQUIPE</a>
            </div>
            <hr class="top-box linecut">
            <div class="top-box top-box-b">
                <a href="#">JUNTAR-SE A UMA EQUIPE</a>
             </div>
        </div>
   </section>
</div>
</template>

<script>

</script>

<style>
.bgordem {
    background: url(@/assets/ordo-realitas.jpeg);
    background-size: cover;
    background-position: center;
    display: grid;
    grid-template-columns: 1fr 1px 1fr;
    grid-template-areas: 
    'top-box-a linecut top-box-b';
    height: 50rem;
}


.info .top-box-a:hover{
    background-color: var(--secondary);
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
}

.info .top-box-b:hover{
    background-color: var(--light);
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
}

.top-box {
    display: grid;
    align-items: center;
    justify-items: center;
    padding: 0;
}

.top-box-a {
    grid-area: top-box-a;
    display: flex;
    justify-content: center;
    transition: all 0.1s ease-out;
}

.linecut {
    grid-area: linecut;
    width: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.top-box-b {
    grid-area: top-box-b;
    display: flex;
    justify-content: center;
    text-decoration: none;
    transition: all 0.1s ease-out;

}

.top-box-b a {
    text-align: center;
    margin-left: 50px;
    margin-right: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.top-box a {
    color: var(--light);
    font-size: 4rem;
    font-weight: bold; 
    size-adjust: 100px;
    text-decoration: none;
}

.top-box-a a {
    text-align: center;
    margin-left: 50px;
    margin-right: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>