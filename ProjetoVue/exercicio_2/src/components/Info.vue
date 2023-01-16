<template>
    <div>
        <p v-if="esta_trabalhando">Estou trabalhando VUE no momento.</p>
        <p v-else>Estou em busca de novas oportunidades!</p>
        <p>Utilizo as seguintes Tecnologia para Back-End:</p>
        <ul>
            <li v-for="(technology, index) in backend_tecnologies" v-bind:key="index">{{technology}}</li>
        </ul>
        <p>Utilizo as seguinte Tecnologias para Front-End:</p>
        <ul>
            <li v-for="technology in frontend_tecnologies" :key="technology.id">
                {{ technology.language }}
            </li>
        </ul>
        <div>
            <button @click="showEmail">{{ textoBotao }}</button>
        </div>
        <p v-show="mostrar_email">Mande uma Mensagem para: {{ email }}</p>
        <p class="teste">Para acessar meu portofólio, <a v-bind:href="meu_link">basta clicar aqui</a></p>
        <Picture/>
    </div>
</template>

<script>
import Picture from './Picture.vue';

export default{
    name: 'Info',
    components: {
        Picture
    },
    data(){
        return{
            esta_trabalhando: false,
            mostrar_email: false, 
            email: 'guilhermeblabla@hotmail.com',
            meu_link: 'https://google.com.br',
            textoBotao: "Mostrar Email",
            
            //tipos de renderização de Array
            backend_tecnologies: ["Javascript", "PHP", "Python"],
            frontend_tecnologies: [
                {id: 1, language:'HTML'},
                {id: 2, language:'CSS'},
                {id: 3, language:'Vue'}
            ]
        }
    },
    methods: {
        
        //ele muda caracteristica do button
        showEmail(){
            this.mostrar_email = !this.mostrar_email
            if(!this.mostrar_email){
                this.textoBotao = 'Mostrar E-mail'
            }else{
                this.textoBotao = "Esconder E-mail"
            }
        }
    }
}


</script>

<style>
.paragrafo-pai{
    color: red;
}


</style>