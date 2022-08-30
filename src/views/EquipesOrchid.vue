<template>
<div class="tudo">
    <section class="info">
        <div class="bgordem-2">
            <div class="top-box top-box-a-2">
                <a href="#">CRIAR UMA EQUIPE</a>
            </div>
            <hr class="top-box linecut-2">
            <div class="top-box top-box-b-2">
                <a href="#">JUNTAR-SE A UMA EQUIPE</a>
             </div>
        </div>
   </section>
</div>
</template>

<script>

</script>

<style>
.bgordem-2 {
    background: url(@/assets/ordo-realitas.jpeg);
    background-size: cover;
    background-position: center;
    display: grid;
    grid-template-columns: 1fr 1px 1fr;
    grid-template-areas: 
    'top-box-a-2 linecut-2 top-box-b-2';
    height: 50rem;
}


.info .top-box-a-2:hover{
    background-color: var(--secondary);
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
}

.info .top-box-b-2:hover{
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

.top-box-a-2 {
    grid-area: top-box-a-2;
    display: flex;
    justify-content: center;
    transition: all 0.1s ease-out;
}

.linecut-2 {
    grid-area: linecut-2;
    width: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.top-box-b-2 {
    grid-area: top-box-b-2;
    display: flex;
    justify-content: center;
    text-decoration: none;
    transition: all 0.1s ease-out;

}

.top-box-b-2 a {
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

.top-box-a-2 a {
    text-align: center;
    margin-left: 50px;
    margin-right: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>