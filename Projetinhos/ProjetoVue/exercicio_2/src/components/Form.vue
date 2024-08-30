<template>
   <div>
    <h2>Meu formulário:</h2>
    <form action="" @submit="enviarFormulario($event)">
        <div>
            <input type="text" v-model="name">
        </div>
        <div>
            <input type="text" v-model="email">
        </div>
        <div>
            <Submit/>
        </div>
    </form>
   </div>
</template>
<script>
import InputText from './Form/InputText.vue';
import Submit from './Form/Submit.vue';
export default{
    name: 'Form',
    components:{
        InputText,
        Submit
    },
    data(){
        return{
            name:"",
            email:""
        }


    },
    methods:{
        enviarFormulario(e){
            e.preventDefault();

            const name = this.name;
            const email = this.email;

            console.log('Form Enviado');
            console.log('o nome é: ' + name);
            console.log('o email é: ' + email);

            // Ajax
            

            // Inserir no DB
        }
    }
}
</script>