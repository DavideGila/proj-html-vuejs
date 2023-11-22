<template>
    <section class="parallax-eighth-section">
        <div class="container my-5">
            <div class="d-flex justify-content-between align-items-center" style="height: 300px;">
                <swiper
                    :slidesPerView="5"
                    :spaceBetween="30"
                    :loop="true"
                    class="mySwiper"
                    > 
                    <swiper-slide v-for="icon in store.parallaxEighth">
                        <span><img :src="icon.img" alt="" class="px-5"></span>
                    </swiper-slide>
                    <swiper-slide v-for="icon in store.parallaxEighth">
                        <span><img :src="icon.img" alt="" class="px-5"></span>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </section>
</template>

<script>
import { store } from '../../data/store';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';


export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            store
        }
    },
}
</script>

<style lang="scss">
.parallax-eighth-section {
    background-image: url('/images/Parallax-03.jpg');
    min-height: 300px;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper {
  margin-left: auto;
  margin-right: auto;
}
</style>