<template>
    <section class="parallax-sixth-section">
        <div class="container text-white position relative d-flex flex-column justify-content-center"
            style="height: 600px; padding: 0 280px 0 280px;" v-for="element in store.designerComments">
            <div class="text-center">
                <img src="/images/image (20).svg" alt="" style="width: 50px; height: 50px;" id="virgolette" class="mb-4">
                <p>{{ element.comment }}</p>
            </div>

            <div class="d-inline-block d-flex justify-content-center">
                <div class="pe-2">
                    <img :src="element.img" alt="" class="rounded-circle">
                </div>

                <div>
                    <h6 class="text-uppercase mb-1">{{ element.name }}</h6>
                    <p>{{ element.job }}</p>
                </div>
            </div>

            <div class="text-center">
                <span @click="selectCircle(0)" class="d-inline-block circle mx-2" :class="{ 'active': active0 }"></span>
                <span @click="selectCircle(1)" class="d-inline-block circle mx-2" :class="{ 'active': active1 }"></span>
                <span @click="selectCircle(2)" class="d-inline-block circle mx-2" :class="{ 'active': active2 }"></span>
            </div>
        </div>
    </section>
    <section>
            <div class="container my-5">
                <h4 class="text-center text-uppercase">Latest News</h4>
                <h2 class="text-center text-uppercase">Articles Updated Daily</h2>
                <div class="row flex-nowrap">
                    <div v-for="article in store.articles" class="col-3" style="width: 480px;">
                        <img :src="article.img" alt="" class="w-100">
                        <p>{{ article.date }}</p>
                        <h6>{{ article.title }}</h6>
                        <p>{{ article.p }}</p>
                    </div>
                </div>  
            </div>
        </section>
</template>

<script>
import { store } from '../../data/store'

export default {
    data() {
        return {
            store,
            active0: false,
            active1: false,
            active2: false
        }
    },
    methods: {
        selectCircle(num) {
            this.active0 = false
            this.active1 = false
            this.active2 = false
            if (num === 0) {
                this.active0 = true
            } else if (num === 1) {
                this.active1 = true
            } else if (num === 2) {
                this.active2 = true
            }
        }
    },
}
</script>

<style lang="scss">
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

.circle {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background-color: white;
    opacity: 0.5;
}

.circle:hover {
    background-color: white;
    opacity: 1;
}

.active {
    opacity: 1;
}
</style>