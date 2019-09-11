<template>
    <div id="main">
        <Header title="喵喵电影"/>
        <div id="content">
            <div class="movie_menu">
                <div class="city_name">
                    <span>大连</span><i class="iconfont icon-xialajiantou"></i>
                </div>
                <div class="hot_switch">
                    <div class="hot_item active">正在热映</div>
                    <div class="hot_item">即将上映</div>
                </div>
                <div class="search_entry">
                    <i class="iconfont icon-sousuo"></i>
                </div>
            </div>
            <keep-alive>
                <router-view />
            </keep-alive>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header/Header.vue';
import Footer from '@/components/Footer/Footer.vue';

    export default {
        name: 'Movie',
        components : {
            Header,
            Footer
        }
    }
</script>

<style>

</style>