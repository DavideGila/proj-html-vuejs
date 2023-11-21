import {reactive} from 'vue';
export const store = reactive({
    navList: [
        'Home',
        'Blog',
        'Pages',
        'About',
        'Contacts',
        'Gallery',
        'Shop'
    ],
    navIcon: [
        '/images/image (8).svg',
        '/images/image (9).svg',
        '/images/image (10).svg',
        '/images/image (11).svg',
        '/images/image (12).svg'
    ],
    firstSection: {
        firstimg: '/images/image (14).svg',
        firsttitle:'Array of equipment',
        secondimg: '/images/image (16).svg',
        secondtitle: 'New technologies',
        thirdimg: '/images/image (18).svg',
        thirdtitle:'Versitile actors',
        fourthimg: '/images/image (15).svg',
        fourthtitle:'Top directors',
        fifthimg: '/images/image (17).svg',
        fifthtitle: 'Minute editing',
        sixthimg: '/images/image (19).svg',
        sixthtitle:'Versitile actors'
    },
})