const posts = [
  {
    category: {
      category: "Music",
      slug: "music",
    },
    slug: "erit-est-pulcherrime",
    tags: ["JavaScript", "HTML", "CSS"],
    title: "Erit est pulcherrime",
    authors: [
      {
        name: "Leanne Graham",
        picture: {
          url: "https://media.graphassets.com/rlcJjvCRTvCV0sddgEvz",
        },
        slug: "leanne-graham",
      },
      {
        name: "Admin",
        picture: {
          url: "https://media.graphassets.com/GruyGPpXSTrY1zi8azDo",
        },
        slug: "admin",
      },
    ],
    coverImage: {
      url: "https://media.graphassets.com/DXAO4IwOTz60VkoVuF9w",
    },
    date: "2021-11-09",
  },
  {
    category: {
      category: "Esports",
      slug: "esports",
    },
    slug: "sors-ventos",
    tags: ["HTML", "CSS", "JavaScript"],
    title: "Sors ventos",
    authors: [
      {
        name: "Leanne Graham",
        picture: {
          url: "https://media.graphassets.com/rlcJjvCRTvCV0sddgEvz",
        },
        slug: "leanne-graham",
      },
    ],
    coverImage: {
      url: "https://media.graphassets.com/orzLgyMZQHO0epBKhZOk",
    },
    date: "2021-11-17",
  },
  {
    category: {
      category: "Music",
      slug: "music",
    },
    slug: "in-istis",
    tags: ["HTML", "CSS", "JavaScript"],
    title: "In istis",
    authors: [
      {
        name: "Leanne Graham",
        picture: {
          url: "https://media.graphassets.com/rlcJjvCRTvCV0sddgEvz",
        },
        slug: "leanne-graham",
      },
    ],
    coverImage: {
      url: "https://media.graphassets.com/mwee7LhOTZSpOMGkQaUg",
    },
    date: "2021-11-21",
  },
  {
    category: {
      category: "Esports",
      slug: "esports",
    },
    slug: "diva-sonum-rupit-umbras-caerulus-siderea",
    tags: ["JavaScript"],
    title: "Diva sonum rupit umbras caerulus siderea",
    authors: [
      {
        name: "Leanne Graham",
        picture: {
          url: "https://media.graphassets.com/rlcJjvCRTvCV0sddgEvz",
        },
        slug: "leanne-graham",
      },
      {
        name: "Admin",
        picture: {
          url: "https://media.graphassets.com/GruyGPpXSTrY1zi8azDo",
        },
        slug: "admin",
      },
    ],
    coverImage: {
      url: "https://media.graphassets.com/Wyu4DkqQQyVFUHKKitAQ",
    },
    date: "2021-11-22",
  },
  {
    category: {
      category: "Music",
      slug: "music",
    },
    slug: "murmure-splendidus-invidia-merui-usus-flammas-clamoribus",
    tags: ["HTML", "CSS"],
    title: "Murmure splendidus invidia merui usus flammas clamoribus",
    authors: [
      {
        name: "Leanne Graham",
        picture: {
          url: "https://media.graphassets.com/rlcJjvCRTvCV0sddgEvz",
        },
        slug: "leanne-graham",
      },
    ],
    coverImage: {
      url: "https://media.graphassets.com/hitwoSUdTIeMVZd963yB",
    },
    date: "2021-11-23",
  },
  {
    category: {
      category: "Esports",
      slug: "esports",
    },
    slug: "sports-enthusiast-and-my-passion-lies-in-podcast",
    tags: ["Tag1 ", "tag2"],
    title: "Sports enthusiast and My passion lies in Podcast.",
    authors: [
      {
        name: "Admin",
        picture: {
          url: "https://media.graphassets.com/GruyGPpXSTrY1zi8azDo",
        },
        slug: "admin",
      },
    ],
    coverImage: {
      url: "https://media.graphassets.com/pHTOFz0T5qWYmqUlQF2Q",
    },
    date: "2023-05-18",
  },
];
export default function handler(req, res) {
  req = posts;
  res.status(200).json(req);
}
