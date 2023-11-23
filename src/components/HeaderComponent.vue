<template>
<header>
    <!-- Navbar -->
    <nav>
        <div class="d-flex justify-content-between align-items-center p-4">
            <img src="/images/logo.svg" alt="Logo" id="logo">
            <ul class="d-flex m-0">
                <li v-for="nav in store.navList" class="text-uppercase px-4">{{ nav }}</li>
            </ul>
            <div class="d-flex">
                <div>
                    <img :src="store.navIcon[0]" alt="" class="mx-4 pe-4 border-end">
                </div>
                <div>
                    <span v-for="icon in store.navIcon.slice(1)"><img :src="icon" alt="" class="px-3 icons"></span>
                </div>
            </div>
        </div>
    </nav>
    <HeroComponent />
</header>
</template>

<script>
import { store } from '../data/store'
import HeroComponent from './header/HeroComponent.vue'

    export default {
        components: {
            HeroComponent
        },
        data() {
            return {
                store
            }
        },
    }
</script>

<style lang="scss">
@use '../assets/styles/partials/variables' as *;

#logo {
    width: 200px;
}

li{
    font-size: 13px;
    font-weight: 700;
}
</style>