<template>
    <main>
        <!-- First Section -->
        <section>
            <div class="container">
                <h4 class="text-center text-uppercase">Pelicula Studio</h4>
                <h2 class="text-center text-uppercase">This is what we do</h2>
                <!-- Cards -->
                <div class="row mb-5">
                    <div v-for="element in store.firstSection" class="col-4 text-center">
                        <div class="py-4">
                            <img :src="element.img" alt="" style="width: 80px; height: 80px;">
                        </div>
                        <div>
                            <div class="text-uppercase">
                                <h6>{{ element.title }}</h6>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, quia.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Second Section -->
        <section class="bg-second-section">
            <div class="container">
                <div class="row text-white">
                    <div class="col-6"></div>
                    <div class="col-6 my-5 py-5 align-items-center">
                        <h4 class="text-uppercase mb-4">About us</h4>
                        <h2 class="text-uppercase mb-4">High quality cinematics</h2>
                        <p class="lh-lg">Orci varius penatibus et magnis dis parturient In the montes, nascetur ridiculus
                            mus. Nulla
                            A nisi ut mi efficitur hendrerit. nunc urna. quisque a partr hendrerit purus erat, nec dapibus
                            sem sed. phasellus sed eli molestie, porttitor ligula of the egestas, mattis augue. quisque et
                            rhoncus justo. suspendisse luctus pharetra eleme tcondimentum.
                        </p>
                        <button class="btn btn-light text-uppercase rounded-0 p-3 px-5 my-3">Read More</button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Third Section -->
        <section class="mt-5">
            <div class="container">
                <h4 class="text-center text-uppercase">Your Watchlist</h4>
                <h2 class="text-center text-uppercase">Best Hits Movies</h2>
                <div class="row m-3">
                    <div v-for="element in store.thirdSection" class="col-4 text-center p-0">
                        <img :src="element.img" alt="" style="width: 94%;" class="pb-3">
                        <h6 class="text-uppercase pb-2">{{ element.title }}</h6>
                        <p class="pb-3">{{ element.p }}</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import { store } from '../data/store'

export default {
    data() {
        return {
            store
        }
    },
}
</script>

<style lang="scss">
@use '../assets/styles/partials/variables' as *;

h4 {
    font-size: 13px;
    font-weight: 700;
}

h2 {
    font-size: 40px;
    font-weight: 700;
}

h6 {
    font-size: 17px;
    font-weight: 700;
}

.col-4 p {
    color: var(--global-palette3);
}

.bg-second-section {
    background-image: url('/images/About-Us.jpg');
    background-repeat: no-repeat;
    background-size: auto;
}

.col-6 button {
    font-size: 17px;
    font-weight: 700;
    line-height: 24px;
}

.col-6 p {
    font-size: 17px;
    font-weight: 400;
}
</style>