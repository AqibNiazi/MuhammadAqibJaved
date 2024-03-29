const express = require("express");
const routes = express.Router();
module.exports = () => {
  const winterCollection = [
    {
      id: 1,
      name: "leather jacket ",
      color: "black",
      size: "Large",
      imageSrc:
        "https://images.unsplash.com/photo-1553640662-9ab20b8fa2ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGxlYXRoZXIlMjBqYWNrZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      price: 5500,
      category: "Jackets",
    },
    {
      id: 2,
      name: "  black jacket ",
      color: "black",
      size: "Large",
      imageSrc:
        "https://images.unsplash.com/photo-1520975916090-3105956dac38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGxlYXRoZXIlMjBqYWNrZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      price: 6000,
      category: "Jackets",
    },
    {
      id: 3,
      name: "Alphine jacket",
      color: "Navy Blue",
      size: "Medium",
      imageSrc:
        "https://images.unsplash.com/photo-1553591589-2e96ef7eca65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGxlYXRoZXIlMjBqYWNrZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      price: 4300,
      category: "Jackets",
    },
    {
      id: 4,
      name: "   Uniworth jacket ",
      color: "black",
      size: "small",
      imageSrc:
        "https://images.unsplash.com/photo-1552699344-8718b46cb5ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGxlYXRoZXIlMjBqYWNrZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      price: 5250,
      category: "Jackets",
    },
    {
      id: 5,
      name: "Leather jacket ",
      color: "dark brown",
      size: "medium",
      imageSrc:
        "https://images.unsplash.com/photo-1602370463198-086436840055?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGVhdGhlciUyMGphY2tldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      price: 5400,
      category: "Jackets",
    },
    {
      id: 6,
      name: "Packable jacket",
      color: "black",
      size: "small",
      imageSrc:
        "https://images.unsplash.com/photo-1558877025-7aa34b6ba233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGxlYXRoZXIlMjBqYWNrZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      price: 4800,
      category: "Jackets",
    },
    {
      id: 7,
      name: "black leopard T-shirt",
      color: "leopard",
      size: "Large",
      imageSrc:
        "https://images.unsplash.com/photo-1536766820879-059fec98ec0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2ludGVyJTIwc2hpcnRzJTIwbWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      price: 1200,
      category: "winterShirt",
    },
    {
      id: 8,
      name: "plaid sport shirt",
      color: "Red black",
      size: "Large",
      imageSrc:
        "https://images.unsplash.com/photo-1434510423563-c7e99bbc5bbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2ludGVyJTIwc2hpcnRzJTIwbWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      price: 1400,
      category: "winterShirt",
    },
    {
      id: 9,
      name: "white dress shirt",
      color: "white",
      size: "Large",
      imageSrc:
        "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      price: 1240,
      category: "winterShirt",
    },
    {
      id: 10,
      name: "white dress Shirt",
      color: "white",
      size: "Large",
      imageSrc:
        "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjBzaGlydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      price: 5995,
      category: "winterShirt",
    },
    {
      id: 11,
      name: "orange dress Shirt",
      color: "orange",
      size: "medium",
      imageSrc:
        "https://images.unsplash.com/photo-1521820298019-160c4bc0dc91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tZW4lMjBzaGlydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      price: 1100,
      category: "winterShirt",
    },
    {
      id: 12,
      name: "long sleeve Shirt",
      color: "white",
      size: "Large",
      imageSrc:
        "https://images.unsplash.com/photo-1608234807905-4466023792f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW4lMjBzaGlydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      price: 1200,
      category: "winterShirt",
    },
    {
      id: 13,
      name: "Blue Denim Jean",
      color: "blue",
      size: "Large",
      imageSrc:
        "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      price: 1350,
      category: "winterPants",
    },
    {
      id: 14,
      name: "Black dress pant",
      color: "black",
      size: "Large",
      imageSrc:
        "https://images.unsplash.com/photo-1584865288642-42078afe6942?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      price: 1300,
      category: "winterPants",
    },
    {
      id: 15,
      name: "Blue Denim Jean",
      color: "blue",
      size: "medium",
      imageSrc:
        "https://images.unsplash.com/photo-1609324120004-364275e0ad05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      price: 1500,
      category: "winterPants",
    },
  ];
  //sub routes
  routes.get("/", (req, res) => {
    res.json(winterCollection);
  });
  return routes;
};
