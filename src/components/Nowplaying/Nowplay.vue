<template>
    <div class="movie_body" ref="movie_body">
        <!-- 引入loading组件 -->
        <Loading v-if="isLoading" />
        <!-- 父子间传递方法 -->
        <Scroller v-else :handleToScroll="handleToScroll" :handleToTouchEnd="handleToTouchEnd">
            <ul>
                <li class="pulldown">{{ pullDownMsg }}</li>
                <li v-for="item in movieList" :key="item.id">
                    <div class="pic_show" @tap="handleToDetail(item.id)"><img :src="item.img | setWH('128.180')" alt=""></div>
                    <div class="info_list">
                        <h2  @tap="handleToDetail(item.id)">{{ item.nm }} <img v-if="item.version" src="@/assets/maxs.png" alt=""> </h2>
                        <p> {{  }} <span class="grade">{{ item.sc }}</span></p>
                        <p>主演：{{ item.star }}</p>
                        <p>{{ item.showInfo }}</p>
                    </div>
                    <div class="btn_mall">
                        购票
                    </div>
                </li>
                
            </ul>
        </Scroller>
    </div>
</template>

<script>
// import BScroll from 'better-scroll';

    export default {
        name: 'NowPlaying',
        data(){
            return {
                movieList : [],
                pullDownMsg : '',
                isLoading : true,
                // 上一次的城市id
                prevCityId : -1
            }
        },
        activated(){
            // 存储上一次的prevCityId
            var cityId = this.$store.state.city.id;
            if( this.prevCityId === cityId ){return;}
            this.isLoading = true;
            console.log(123)
            this.axios.get('/api/movieOnInfoList?cityId=' + cityId).then((res) => {
                var msg = res.data.msg;
                console.log(res.data)
                if(msg === 'ok'){
                    this.movieList = res.data.data.movieList;
                    this.isLoading = false;
                    // prevCityId
                    this.prevCityId = cityId;

                    // 页面渲染完毕触发这个方法的回调
                    // this.$nextTick(() =>{
                    //     //接收两个参数 1.找到最外层包裹的容器 dom元素 2.配置元素 true 开启配置
                    //     var scroll =  new BScroll( this.$refs.movie_body, {
                    //         tap : true,
                    //         probeType: 1
                    //     });

                    //     //下拉刷新
                    //     scroll.on('scroll',(pos)=>{
                    //         // console.log('scroll')
                    //         //下拉大于30时，执行
                    //         if( pos.y > 30){
                    //             this.pullDownMsg = '正在加载...'
                    //         }
                            
                    //     });

                    //     scroll.on('touchEnd',(pos)=>{
                    //         // console.log('touchend')
                    //         if(pos.y > 30){
                    //             // 发起ajax
                    //             this.axios.get('/api/movieOnInfoList?cityId=12').then((res) => {
                    //                 var msg = res.data.msg;
                    //                 if(msg === 'ok'){
                    //                     this.pullDownMsg = '加载完成！';
                    //                     setTimeout(() =>{
                    //                         this.movieList = res.data.data.movieList;
                    //                         this.pullDownMsg = ''
                    //                     },1000)
                    //                 }
                    //             })
                    //         }
                    //     })
                    // })
                    
                }
            })
        },
        methods:{
            handleToDetail(movieId){
                // console.log(movieId)
                this.$router.push('/movie/detail/1/' + movieId)
            },
            handleToScroll(pos){
                if( pos.y > 30){
                    this.pullDownMsg = '正在加载...'
                }
            },
            handleToTouchEnd(pos){
                if(pos.y > 30){
                    // 发起ajax
                    this.axios.get('/api/movieOnInfoList?cityId=12').then((res) => {
                        var msg = res.data.msg;
                        if(msg === 'ok'){
                            this.pullDownMsg = '加载完成！';
                            setTimeout(() =>{
                                this.movieList = res.data.data.movieList;
                                this.pullDownMsg = ''
                            },1000)
                        }
                    })
                }
            }
        }
    }
</script>

<style scoped>
#content .movie_body{ flex:1; overflow:auto;}
.movie_body ul{ margin:0 12px; overflow: hidden;}
.movie_body ul li{ margin-top:12px; display: flex; align-items:center; border-bottom: 1px #e6e6e6 solid; padding-bottom: 10px;}
.movie_body .pic_show{ width:64px; height: 90px;}
.movie_body .pic_show img{ width:100%;}
.movie_body .info_list { margin-left: 10px; flex:1; position: relative;}
.movie_body .info_list h2{ font-size: 17px; line-height: 24px; width:150px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
.movie_body .info_list p{ font-size: 13px; color:#666; line-height: 22px; width:200px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
.movie_body .info_list .grade{ font-weight: 700; color: #faaf00; font-size: 15px;}
.movie_body .info_list img{ width:50px; position: absolute; right:10px; top: 5px;}
.movie_body .btn_mall , .movie_body .btn_pre{ width:47px; height:27px; line-height: 28px; text-align: center; background-color: #f03d37; color: #fff; border-radius: 4px; font-size: 12px; cursor: pointer;}
.movie_body .btn_pre{ background-color: #3c9fe6;}
.movie_body .pulldown{ margin:0; padding:0; border:none;}
</style>