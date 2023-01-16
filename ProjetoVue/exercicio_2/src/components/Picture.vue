<template>
    <img :src="avatar" :alt="descricao">
</template>

<script>
export default{
    name:'Picture',
    data(){
        return{
            avatar: '/img/github.svg',
            descricao: 'Guilherme Lima'
        }
    }


}


</script>