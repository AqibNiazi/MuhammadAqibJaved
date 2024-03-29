const menCollection = (req, res) => {
  const Categories = [
    {
      id: 1,
      title: "MEN",
      image:
        "https://www.gulahmedshop.com/media/wysiwyg/cms-page/01_men_clothes/22_12_01/05_inside_banner_wb.jpg",
      subCategories: [
        {
          id: 2,
          title: "UNSTITCHED",
          image:
            "https://www.gulahmedshop.com/media/wysiwyg/cms-page/01_men_clothes/22_12_01/01_unstitched.jpg",
        },
        {
          id: 3,
          title: "WESTERN",
          image:
            "https://www.gulahmedshop.com/media/wysiwyg/cms-page/01_men_clothes/22_12_01/02_western.jpg",
        },
        {
          id: 4,
          title: "EASTERN",
          image:
            "https://www.gulahmedshop.com/media/wysiwyg/cms-page/01_men_clothes/22_12_01/03_eastern.jpg",
        },
        {
          id: 5,
          title: "SHOES",
          image:
            "https://www.gulahmedshop.com/media/wysiwyg/cms-page/01_men_clothes/22_12_01/04_shoes.jpg",
        },
      ],
    },
  ];
  res.json(Categories);
};

module.exports = {
  menCollection,
};
