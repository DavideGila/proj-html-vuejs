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
  ]
});
