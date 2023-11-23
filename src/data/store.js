import { reactive } from "vue";
export const store = reactive({
  navList: ["Home", "Blog", "Pages", "About", "Contacts", "Gallery", "Shop"],
  navIcon: [
    "/images/image (8).svg",
    "/images/image (9).svg",
    "/images/image (10).svg",
    "/images/image (11).svg",
    "/images/image (12).svg",
  ],
  firstSection: [
    {
      img: "/images/image (14).svg",
      title: "Array of equipment",
    },
    {
      img: "/images/image (16).svg",
      title: "New technologies",
    },
    {
      img: "/images/image (18).svg",
      title: "Versitile actors",
    },
    {
      img: "/images/image (15).svg",
      title: "Top directors",
    },
    {
      img: "/images/image (17).svg",
      title: "Minute editing",
    },
    {
      img: "/images/image (19).svg",
      title: "Versitile actors",
    },
  ],
  thirdSection: [
    {
      img: "/images/Gallery-01.jpg",
      title: "Seventeeth Summer",
      p: "Commercial, Music Video.",
    },
    {
      img: "/images/Gallery-02.jpg",
      title: "A message to Space",
      p: "Short Film",
    },
    {
      img: "/images/Gallery-03.jpg",
      title: "The Most Beautiful Thing",
      p: "Music Video",
    },
    {
      img: "/images/Gallery-04.jpg",
      title: "Permission to speak",
      p: "Documentary",
    },
    {
      img: "/images/Gallery-05.jpg",
      title: "Explore our Space",
      p: "Film noir",
    },
    {
      img: "/images/Gallery-06.jpg",
      title: "Film Prodution",
      p: "Blaxploitation",
    },
  ],
  teamMembers:[
    {
      img: '/images/Team-01.jpg',
      name: 'Fabricio Guerra',
      job: 'Main Director'
    },
    {
      img: '/images/Team-02.jpg',
      name: 'Umberto Pagoda',
      job: 'Main Writer'
    },
    {
      img: '/images/Team-03.jpg',
      name: 'Gloria Riccasso',
      job: 'Main Producer'
    },
    {
      img: '/images/Team-04.jpg',
      name: 'Lio Napoin',
      job: 'Cameraman'
    }
  ],
  designerComments: [
    {
      comment: 'Curabitur bibendum ex ut sapien blandit viverra. Nunc lobortis mi dui, id Etiam tempor sit amet metus in bibendum. Nunc eros risus, pellentesque a augue Pellentesque fringilla eget mi eu mollis. Mauris commodo',
      img: '/images/01.jpg',
      name: 'John Doe',
      job: 'Designer'
    },
    {
      comment: 'Curabitur bibendum ex ut sapien blandit viverra. Nunc lobortis mi dui, id Etiam tempor sit amet metus in bibendum. Nunc eros risus, pellentesque a augue Pellentesque fringilla eget mi eu mollis. Mauris commodo',
      img: '/images/02.jpg',
      name: 'John Doe',
      job: 'Designer'
    },
    {
      comment: 'Curabitur bibendum ex ut sapien blandit viverra. Nunc lobortis mi dui, id Etiam tempor sit amet metus in bibendum. Nunc eros risus, pellentesque a augue Pellentesque fringilla eget mi eu mollis. Mauris commodo',
      img: '/images/03.jpg',
      name: 'John Doe',
      job: 'Designer'
    }
  ],
  articles: [
    {
      img: '/images/blog07.jpg',
      date: 'November 06, 2021 By Admin',
      title: 'Recap Your Latest Company Event',
      p: 'Suspendisse dictum dictum tempor. Ut non faucibus arcu, id elementum est. Suspendise sed'
    },
    {
      img: '/images/blog01.jpg',
      date: 'May 27, 2022 By Admin',
      title: 'How to Edit a Film Score to Serve',
      p: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut'
    },
    {
      img: '/images/blog02.jpg',
      date: 'May 07, 2022 By Admin',
      title: 'Are you Ready to make it awesome',
      p: 'Design is our playground. While we create an awesome experience, we like having fun. No animals'
    },
    {
      img: '/images/blog03.jpg',
      date: 'April 10, 2022 By Admin',
      title: 'Last Video Website you need for',
      p: 'In as name to here them deny wise this. As rapid woody my he me which. Men but they fail shew just'
    },
    {
      img: '/images/blog04.jpg',
      date: 'March 01, 2022 By Admin',
      title: 'Band Uprising to Cult Status',
      p: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, placeat.'
    },
    {
      img: '/images/blog05.jpg',
      date: 'February 14, 2022 By Admin',
      title: 'Bringing the stage to life',
      p: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, placeat.'
    },
    {
      img: '/images/blog06.jpg',
      date: 'December 07, 2021 By Admin',
      title: 'Cadenze Rios Picked For The Next Picture',
      p: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, placeat.'
    }
  ],
  parallaxEighth: [
    {
      img: '/images/01.png'
    },
    {
      img: '/images/02.png'
    },
    {
      img: '/images/03.png'
    },
    {
      img: '/images/04.png'
    },
    {
      img: '/images/05.png'
    }
  ],
  footerContact: [
    {
      img: '/images/footer-location-dot-solid.svg',
      info: '2/45 Tower Street, New York USA'
    },
    {
      img: '/images/footer-phone-solid.svg',
      info: 'Call Us On 0800 840 1010'
    },
    {
      img: '/images/footer-envelope-soli.svg',
      info: 'Demo@Example.Com'
    }     
  ],
  footerInfo: [
    'Product Support',
    'Checkout',
    'Report Abuse',
    'Redeem Voucher',
    'Order Status'
  ],
  footerLinks: [
    'Policies & Rules',
    'Privacy Policy',
    'License Policy',
    'My Account',
    'Locality'
  ]
});
