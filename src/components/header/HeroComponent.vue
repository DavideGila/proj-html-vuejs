<template>
    <swiper
        :centeredSlides="false"
        :autoplay="{
        delay: 3500,
        disableOnInteraction: false,
        }"
        :modules="modules"
        class="mySwiper"
  >
        <swiper-slide v-for="bg in store.heroBackground">
            <div :class="bg" style="height: 800px;">
                <div class="container text-white">
                    <div class="d-flex flex-column justify-content-center align-items-start" style="height: 800px; width: 575px;">
                        <h6 class="text-uppercase mb-4">Cinemato Studio</h6>
                        <h1 class="text-start text-uppercase mb-4">Action and Ispire People</h1>
                        <span><button class="btn btn-light p-3 px-4 text-uppercase">Read More</button></span>
                    </div>
                </div>
            </div>
        </swiper-slide>
    </swiper>
</template>

<script>
import { store } from '../../data/store'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
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
        setup() {
            return {
                modules: [Autoplay],
            }
    },
    }
</script>

<style lang="scss">
.hero-bg-1 {
    background-image: url('/images/cinematographer-vs-director-of-photography.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
}

.hero-bg-2 {
    background-image: url('/images/how-to-become-film-stage-and-tv-director-in-australia-ozstudies.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
}

h6 {
    font-size: 20px;
    font-weight: 700;
}

h1 {
    font-size: 70px;
    font-weight: 700;
}

</style>