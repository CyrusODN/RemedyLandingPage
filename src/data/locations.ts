export const locations = [
  {
    id: "gdynia",
    city: "Gdynia",
    address: "ul. Generała Józefa Bema 15/1",
    image: "/images/Image.jpg",
    images: [
      {


        image: "/images/Gdynia-2.jpg",
      }, {

        image: "/images/Gdynia-1.jpg",
      },
    ],


    coordinates: {
      lat: 54.512568929701885,
      lng: 18.540836277637418,


    },
    openingHours: [
      { days: "Monday - Friday", hours: "8:00 - 20:00" },
      { days: "Saturday", hours: "9:00 - 14:00" },
      { days: "Sunday", hours: "Closed" },
    ],
    hasParking: true,
    publicTransport: true,
    accessibility: true,
    specialists: [
      "Psychiatrist",
      "Child and adolescent psychiatrist",
      "Psychologist",
      "Psychotherapist",
      "Addiction therapist",
    ],
  },
  {
    id: "gdansk",
    city: "Gdańsk",
    address: "ul. Stanisława Staszica 6/2",

    images: [
      {


        image: "/images/Gdansk-1.jpg",
      }, {

        image: "/images/Gdansk-2.jpg",
      },
    ],
    image: "/images/Image.jpg",




    // image1: "/images/Gdansk-2.jpg",
    // image2: "/images/Gdansk-1.jpg",



    coordinates: {
      lat: 54.381545703964875,
      lng: 18.5979672288359,

      // 54.381545703964875, 18.5979672288359
    },
    openingHours: [
      { days: "Monday - Friday", hours: "8:00 - 20:00" },
      { days: "Saturday", hours: "9:00 - 14:00" },
      { days: "Sunday", hours: "Closed" },
    ],
    hasParking: true,
    publicTransport: true,
    accessibility: true,
    specialists: [
      "Psychiatrist",
      "Psychologist",
      "Psychotherapist",
      "EMDR Therapist",
      "Addiction therapist",
    ],
  },
];
