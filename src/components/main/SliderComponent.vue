<template>
    <section class="parallax-sixth-section">
        <swiper  
        :pagination="{
            clickable: true,
        }" 
        :modules="modules" 
        class="mySwiper">
            <swiper-slide class="container-fluid text-white d-flex flex-column justify-content-center"
                style="height: 600px; padding: 0 550px;" v-for="element in store.designerComments">
                <img src="/images/image (20).svg" alt="" style="width: 65px; height: 50px;" id="virgolette" class="mb-4">
                <div class="text-center">
                    <p>{{ element.comment }}</p>
                </div>

                <div class="d-inline-block d-flex justify-content-center align-items-start">
                    <div class="pe-2">
                        <img :src="element.img" alt="" class="rounded-circle">
                    </div>

                    <div>
                        <h6 class="text-uppercase mb-1">{{ element.name }}</h6>
                        <p>{{ element.job }}</p>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </section>
    <SecondSliderComponent />
    <ThirdSliderComponent />
</template>

<script>
import SecondSliderComponent from './SecondSliderComponent.vue';
import ThirdSliderComponent from './ThirdSliderComponent.vue';
import { store } from '../../data/store'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default {
    components: {
        SecondSliderComponent,
        ThirdSliderComponent,
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            store
        }
    },
    setup() {
        return {
            modules: [Pagination],
        };
    },
}
</script>

<style lang="scss">
@use '../../assets/styles/partials/variables' as *;

.parallax-sixth-section {
    background-image: url('/images/Parallax-02.jpg');
    min-height: 600px;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

#virgolette {
    filter: invert(93%) sepia(100%) saturate(29%) hue-rotate(136deg) brightness(107%) contrast(110%);
}

.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal {
    top: 420px;
}

.swiper-pagination-bullet{
    width: 10px;
    height: 10px;
    background-color: white;
}

.swiper-pagination-bullet:hover{
    background-color: white;
    opacity: 1;
}
</style>