<template>
<div class="tudo">
  <header class="top-header">
        <nav class="main-nav">
            <ul>
                <div class="junta">
                    <section class="logo">
                        <li><a href="home.html"><img src="@/assets/logo orchid.png" alt=""
                            /></a></li>
                    </section>
                    <section class="main-left">

                        <li><a class="link" href="#">Fichas</a>
                        <linha>|</linha>
                        <a class="link" href="equipe.html">Equipes</a></li>
                    </section>
                </div>
                <section class="main-right">
                    <li>
                    <a class="link" href="login.html">Login</a>
                    <linha>|</linha>
                    <a class="link createacc" href="cadastro.html">Criar conta</a>
                    </li>
                </section>
            </ul>
        </nav>
    </header>
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

.top-header {
    display: flex;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.8);
    background-color: #0c0e10;
    width: 100%;
}
.main-nav{
    display: flex;
    width: 100%;
}

.logo {
    grid-area: logo;
    margin-left: 2rem;
}

.logo li a {
    display: flex;
    justify-content: left;
    height: 100px;
}

.main-left {
    align-items: center;
}

/* .main-left .box-a {
    margin-right: 500px;
} */

.main-right {
    align-items: center;
}

.main-nav .main-left {
    display: flex;
    justify-content: left;
    align-items: center;
    list-style: none;
    
}

.main-nav .main-right {
    display: flex;
    justify-content: right;
    align-items: center;
    list-style: none;
    
}

.main-nav ul {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0;
    list-style: none;
    /* grid-template-columns: repeat(3, 1fr);
    align-items: center;
    grid-template-areas: 
        'logo main-left main-right'; */
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
}
.main-nav ul:last-child {
    margin-right: 50px;
}

.main-nav .junta{
    display: flex
}
.main-nav a {
    color: #B04141;
    text-decoration: none;
    padding: 0.8rem;
    font-size: 20px;
    font-weight: bold;
}

</style>