<template>
    <div id="main">
        <Header title="我的喵喵"/>
                <div id="content">
                    <Login />
                </div>
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header/Header.vue';
import Footer from '@/components/Footer/Footer.vue';
import Login from '@/components/Login/Login.vue';

    export default {
        name: 'Mine',
        components:{
            Header,
            Footer,
            Login
        }
    }
</script>

<style>

</style>