<template>
    <div>
        <h1>Olá VUE</h1>
        <p>Meu nome é {{ nome }} e trabalho como {{ profissão }}</p>
    </div>
</template>

<script>
    export default {
        name: 'primeiroComponente',
        data(){
            return{
                nome: "Guilherme",
                profissão: "Programador",
                teste: "testando"
            }
        }
    }
</script>