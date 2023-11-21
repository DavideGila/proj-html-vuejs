<template>
    <main>
        <section>
            <div class="container">
                <h4 class="text-center text-uppercase">Pelicula Studio</h4>
                <h2 class="text-center text-uppercase">This is what we do</h2>
                <!-- Cards -->
                <div class="row">
                    <div class="col-4 text-center">
                        <div class="py-4">
                            <img :src="store.firstSection.firstimg" alt="" style="width: 80px; height: 80px;">
                        </div> 
                        <div>
                            <div class="text-uppercase">
                                <h6>{{ store.firstSection.firsttitle }}</h6>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, quia.</p>
                        </div>
                    </div>
                    <div class="col-4 text-center">
                        <div class="py-4">
                            <img :src="store.firstSection.secondimg" alt="" style="width: 80px; height: 80px;">
                        </div> 
                        <div>
                            <div class="text-uppercase">
                                <h6>{{ store.firstSection.secondtitle }}</h6>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, quia.</p>
                        </div>
                    </div>
                    <div class="col-4 text-center">
                        <div class="py-4">
                            <img :src="store.firstSection.thirdimg" alt="" style="width: 80px; height: 80px;">
                        </div> 
                        <div>
                            <div class="text-uppercase">
                                <h6>{{ store.firstSection.thirdtitle }}</h6>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, quia.</p>
                        </div>
                    </div>
                    <div class="col-4 text-center">
                        <div class="py-4">
                            <img :src="store.firstSection.fourthimg" alt="" style="width: 80px; height: 80px;">
                        </div> 
                        <div>
                            <div class="text-uppercase">
                                <h6>{{ store.firstSection.fourthtitle }}</h6>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, quia.</p>
                        </div>
                    </div>
                    <div class="col-4 text-center">
                        <div class="py-4">
                            <img :src="store.firstSection.fifthimg" alt="" style="width: 80px; height: 80px;">
                        </div> 
                        <div>
                            <div class="text-uppercase">
                                <h6>{{ store.firstSection.fifthtitle }}</h6>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, quia.</p>
                        </div>
                    </div>
                    <div class="col-4 text-center">
                        <div class="py-4">
                            <img :src="store.firstSection.sixthimg" alt="" style="width: 80px; height: 80px;">
                        </div> 
                        <div>
                            <div class="text-uppercase">
                                <h6>{{ store.firstSection.sixthtitle }}</h6>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, quia.</p>
                        </div>
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
</style>