const womenCollection=(req,res)=>{
    const kapray = [
        {
          id: 1,
          name: "REGULAR FIT TRUCKER WITH CONTRAST DETAIL",
          description: "F0093/101/801-10401382",
          imageSrc:
            "https://i.pinimg.com/736x/9f/4e/fd/9f4efd2ba0de3a7c8bc8e8bbe26a818f.jpg",
          imageAlt: "",
          price: 3000,
          size: "Large",
          color:"Blue",
          gender: "Female",
          href: "#",
        },
        {
          id: 2,
          name: "REGULAR FIT SHERPA COLLAR TRUCKER JACKET",
          description: "F0085/101/625-10400746",
          imageSrc:
            "https://i1.wp.com/style.pk/wp-content/uploads/2013/11/Junaid-Jamshed-Winter-Dresses-2013-2014-for-Women-001.jpg?resize=532%2C720",
          imageAlt: "",
          price: 3000,
          size: "Large",
          color:"Blue",
          gender: "Female",
          href: "#",
        },
        {
          id: 3,
          name: "REGULAR FIT SHERPA COLLAR TRUCKER JACKET",
          description: "F0096/101/901-10401403",
          imageSrc:
            "https://static-01.daraz.pk/p/06adbf8742bb05b48d1e33301acee164.jpg",
          imageAlt: "",
          price: 3000,
          size: "Small",
          color:"Black",
          gender: "Female",
          href: "#",
        },
        {
          id: 4,
          name: "OVERSIZED UNISEX DENIM VARSITY JACKET",
          description: "F0083/101/625-10400714",
          imageSrc:
            "https://joraywala.com/wp-content/uploads/2021/05/JJUS008-F-Joraywala.jpg",
          imageAlt: "",
          price: 3000,
          size: "Medium",
          color:"light Blue",
          gender: "Female",
          href: "#",
        },
        {
          id: 5,
          name: "REGULAR FIT GRAPHIC HOODED JACKET",
          description: "F0079/101/901-10385656",
          imageSrc:
            "https://style.pk/wp-content/uploads/2013/02/Junaid-Jamshed-Spring-Summer-Collection-2013-For-Women-002.jpg",
          imageAlt: "",
          price: 9000,
          size: "Small",
          color:"black",
          gender: "Female",
          href: "#",
        },
        {
          id: 6,
          name: "MOCK NECK PUFFER JACKET",
          description: "F0075/101/710-10385624",
          imageSrc:
            "https://www.junaidjamshed.com/media/catalog/product/2/2/22-002s-1_1_.jpg",
          imageAlt: "",
          price: 2000,
          size: "Large",
          color:"red",
          gender: "Female",
          href: "#",
        },
      ];
      res.json(kapray)
}
module.exports={
    womenCollection
}