<template>
  <div>
    <Header/>
    <primeiro-componente-vue />
    <p class="paragrafo-pai">O dado retornado é {{ testando }}</p>
    <LifeCycle/>
    <Pessoa/>
  </div>
</template>

<script> 
  import Header from './components/Header.vue';
  import primeiroComponenteVue from './components/primeiroComponente.vue';
  import LifeCycle from './components/LifeCycle.vue';
  import Pessoa from './components/Pessoa.vue';



  export default {
    name: 'app',
    components: {
      primeiroComponenteVue,
      LifeCycle,
      Pessoa,
      Header
    },
    data(){
      return{
        testando: "Teste"
      }
    }
  }
</script>

<style>
body{
  background-color: #333;
  color: white;
}

a{
  color: red;
}

.teste{
  background-color: black;
}

</style>