<template>
    <main>
        <!-- First Section -->
        <section>
            <div class="container my-5">
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

        <!-- Fourth Section -->
        <section class="parallax-fourth-section">
            <div class="container">
                <div class="d-flex justify-content-between align-items-center text-center text-white"
                    style="height: 300px;">
                    <div>
                        <span class="counter"><vue3-autocounter :startAmount='0' :endAmount='780'
                                :duration='2'></vue3-autocounter></span>
                        <h6 class="text-uppercase">Satisfied Clients</h6>
                    </div>
                    <div>
                        <span class="counter"><vue3-autocounter :startAmount='0' :endAmount='20'
                                :duration='2'></vue3-autocounter>+</span>
                        <h6 class="text-uppercase">Our Projects</h6>
                    </div>
                    <div>
                        <span class="counter"><vue3-autocounter :startAmount='0' :endAmount='10000'
                                :duration='2'></vue3-autocounter></span>
                        <h6 class="text-uppercase">Cup of Coffee</h6>
                    </div>
                    <div>
                        <span class="counter"><vue3-autocounter :startAmount='0' :endAmount='12'
                                :duration='2'></vue3-autocounter></span>
                        <h6 class="text-uppercase">Our Awards</h6>
                    </div>
                </div>
            </div>
        </section>

        <!-- Fifth Section -->
        <section>
            <div class="container my-5">
                <h4 class="text-center text-uppercase">The Pericuros</h4>
                <h2 class="text-center text-uppercase">Meet the Team</h2>
                <div class="row text-center">
                    <div v-for="member in store.teamMembers" class="col-3">
                        <img :src="member.img" alt="" class="w-100 pb-3">
                        <h6 class="text-uppercase pb-2">{{ member.name }}</h6>
                        <p>{{ member.job }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Sixth, Seventh, Eighth Section -->
        <SliderComponent />

        <!-- Ninth Section -->
        <FormComponent />
    </main>
</template>

<script>
import { store } from '../data/store'
import { defineComponent } from 'vue';
import Vue3autocounter from 'vue3-autocounter';
import SliderComponent from './main/SliderComponent.vue';
import FormComponent from './main/FormComponent.vue';


export default defineComponent({
    data() {
        return {
            store,
        }
    },
    components: {
        'vue3-autocounter': Vue3autocounter,
        SliderComponent,
        FormComponent
    },
})
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

.parallax-fourth-section {
    background-image: url('/images/Parallax-01.jpg');
    min-height: 300px;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.counter {
    font-size: 55px;
    font-weight: 600;
}
</style>