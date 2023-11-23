<template>
    <footer class="footer-bg">
        <div class="container d-flex justify-content-between text-white border-bottom pb-5">
            <div class="mt-5">
                <h6>Contact Info</h6>
                <ul class="p-0">
                    <li v-for="info in store.footerContact"><img :src="info.img" alt="" class="me-3" style="width: 15px;">{{ info.info }}</li>
                </ul>
            </div>
            <div class="mt-5"> 
                <h6>Information</h6>
                <ul class="p-0">
                    <li v-for="info in store.footerInfo">{{ info }}</li>
                </ul>
            </div>
            <div class="mt-5">
                <h6>Useful Links</h6>
                <ul class="p-0">
                    <li v-for="link in store.footerLinks">{{ link }}</li>
                </ul>
            </div>
            <div class="mt-5">
                <h6 class="mb-5">Newsletter</h6>
                <p class="mb-4">Subscribe To Receive Inspiration, <br> Ideas & News In Your Inbox.</p>
                <div class="mb-3">
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Email">
                </div>
                <button class="btn btn-light text-uppercase p-2 px-4"><h6 class="m-0">Subscribe</h6></button>
            </div>
        </div>
        <div class="text-center text-white mt-2 py-3">
            <span>© 2023 All Rights Reserved. Developed By TemplateMela</span>
        </div>
    </footer>
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

.footer-bg {
    background-color: var(--global-palette2);
}

li {
    line-height: 50px;
    font-size: 17px;
    font-weight: 300;
    color: var(--global-palette4);
}
</style>