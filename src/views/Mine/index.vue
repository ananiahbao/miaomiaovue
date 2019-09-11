<template>
    <div id="main">
        <Header title="我的喵喵"/>
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header/Header.vue';
import Footer from '@/components/Footer/Footer.vue';

    export default {
        name: 'Mine',
        components:{
            Header,
            Footer
        }
    }
</script>

<style>

</style>