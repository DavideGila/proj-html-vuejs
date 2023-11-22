<template>
    <section>
        <div class="container my-5">
            <h4 class="text-center text-uppercase">Latest News</h4>
            <h2 class="text-center text-uppercase">Articles Updated Daily</h2>
            <div class="row">
                <swiper :slidesPerView="3" :spaceBetween="30" class="mySwiper">
                    <swiper-slide v-for="article in store.articles" class="d-flex flex-column">
                        <img :src="article.img" alt="">
                        <p>{{ article.date }}</p>
                        <h6>{{ article.title }}</h6>
                        <p>{{ article.p }}</p>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </section>
</template>

<script>
import { store } from '../../data/store';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


export default {
    components: {
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            store
        }
    },
}
</script>

<style lang="scss">

</style>