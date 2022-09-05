<template>
<div class="tudo">
    <footer>
        <ul>
            <li><router-link to="/contato">Contato</router-link></li>
            <li><linha>|</linha></li>
            <li><router-link to="/sobrenos">Sobre</router-link></li>
        </ul>
    </footer>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.tudo {
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.8);
}

footer {
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.8);
    background-color: #0c0e10;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

footer ul {
    display: flex;
    grid-gap: 20px;
    padding: 0;
    list-style: none;
    justify-content: right;
    margin-right: 2rem;
}

footer a {
    color: #B04141;
    text-decoration: none;
    padding: 0.8rem;
    font-size: 20px;
    margin-right: 2rem;
    font-weight: bold;
}

footer linha {
    margin-right: 2rem;
}

footer a:hover {
    color: #863131;
}

</style>