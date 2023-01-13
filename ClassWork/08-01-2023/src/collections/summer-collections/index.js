const express = require("express");
const routes = express.Router();
module.exports = () => {
    const summerCollection=[
        {
          "id": 61,
          "title": "Leather Straps Wristwatch",
          "description": "Style:Sport ,Clasp:Buckles ,Water Resistance Depth:3Bar",
          "price": 120,
          "discountPercentage": 7.14,
          "rating": 4.63,
          "stock": 91,
          "brand": "Naviforce",
          "category": "mens-watches",
          "thumbnail": "https://i.dummyjson.com/data/products/61/thumbnail.jpg",
          "images": [
            "https://i.dummyjson.com/data/products/61/1.jpg",
            "https://i.dummyjson.com/data/products/61/2.png",
            "https://i.dummyjson.com/data/products/61/3.jpg"
          ]
        },
        {
          "id": 62,
          "title": "Waterproof Leather Brand Watch",
          "description": "Watch Crown With Environmental IPS Bronze Electroplating; Display system of 12 hours",
          "price": 46,
          "discountPercentage": 3.15,
          "rating": 4.05,
          "stock": 95,
          "brand": "SKMEI 9117",
          "category": "mens-watches",
          "thumbnail": "https://i.dummyjson.com/data/products/62/thumbnail.jpg",
          "images": [
            "https://i.dummyjson.com/data/products/62/1.jpg",
            "https://i.dummyjson.com/data/products/62/2.jpg"
          ]
        },
        {
          "id": 63,
          "title": "Royal Blue Premium Watch",
          "description": "Men Silver Chain Royal Blue Premium Watch Latest Analog Watch",
          "price": 50,
          "discountPercentage": 2.56,
          "rating": 4.89,
          "stock": 142,
          "brand": "SKMEI 9117",
          "category": "mens-watches",
          "thumbnail": "https://i.dummyjson.com/data/products/63/thumbnail.webp",
          "images": [
            "https://i.dummyjson.com/data/products/63/1.jpg",
            "https://i.dummyjson.com/data/products/63/2.jpg",
            "https://i.dummyjson.com/data/products/63/3.png",
            "https://i.dummyjson.com/data/products/63/4.jpeg"
          ]
        },
        {
          "id": 64,
          "title": "Leather Strap Skeleton Watch",
          "description": "Leather Strap Skeleton Watch for Men - Stylish and Latest Design",
          "price": 46,
          "discountPercentage": 10.2,
          "rating": 4.98,
          "stock": 61,
          "brand": "Strap Skeleton",
          "category": "mens-watches",
          "thumbnail": "https://i.dummyjson.com/data/products/64/thumbnail.jpg",
          "images": [
            "https://i.dummyjson.com/data/products/64/1.jpg",
            "https://i.dummyjson.com/data/products/64/2.webp",
            "https://i.dummyjson.com/data/products/64/3.jpg",
            "https://i.dummyjson.com/data/products/64/thumbnail.jpg"
          ]
        },
        {
          "id": 65,
          "title": "Stainless Steel Wrist Watch",
          "description": "Stylish Watch For Man (Luxury) Classy Men's Stainless Steel Wrist Watch - Box Packed",
          "price": 47,
          "discountPercentage": 17.79,
          "rating": 4.79,
          "stock": 94,
          "brand": "Stainless",
          "category": "mens-watches",
          "thumbnail": "https://i.dummyjson.com/data/products/65/thumbnail.webp",
          "images": [
            "https://i.dummyjson.com/data/products/65/1.jpg",
            "https://i.dummyjson.com/data/products/65/2.webp",
            "https://i.dummyjson.com/data/products/65/3.jpg",
            "https://i.dummyjson.com/data/products/65/4.webp",
            "https://i.dummyjson.com/data/products/65/thumbnail.webp"
          ]
        },
        {
          "id": 56,
          "title": "Sneakers Joggers Shoes",
          "description": "Gender: Men , Colors: Same as DisplayedCondition: 100% Brand New",
          "price": 40,
          "discountPercentage": 12.57,
          "rating": 4.38,
          "stock": 6,
          "brand": "Sneakers",
          "category": "mens-shoes",
          "thumbnail": "https://i.dummyjson.com/data/products/56/thumbnail.jpg",
          "images": [
            "https://i.dummyjson.com/data/products/56/1.jpg",
            "https://i.dummyjson.com/data/products/56/2.jpg",
            "https://i.dummyjson.com/data/products/56/3.jpg",
            "https://i.dummyjson.com/data/products/56/4.jpg",
            "https://i.dummyjson.com/data/products/56/5.jpg",
            "https://i.dummyjson.com/data/products/56/thumbnail.jpg"
          ]
        },
        {
          "id": 57,
          "title": "Loafers for men",
          "description": "Men Shoes - Loafers for men - Rubber Shoes - Nylon Shoes - Shoes for men - Moccassion - Pure Nylon (Rubber) Expot Quality.",
          "price": 47,
          "discountPercentage": 10.91,
          "rating": 4.91,
          "stock": 20,
          "brand": "Rubber",
          "category": "mens-shoes",
          "thumbnail": "https://i.dummyjson.com/data/products/57/thumbnail.jpg",
          "images": [
            "https://i.dummyjson.com/data/products/57/1.jpg",
            "https://i.dummyjson.com/data/products/57/2.jpg",
            "https://i.dummyjson.com/data/products/57/3.jpg",
            "https://i.dummyjson.com/data/products/57/4.jpg",
            "https://i.dummyjson.com/data/products/57/thumbnail.jpg"
          ]
        },
        {
          "id": 58,
          "title": "formal offices shoes",
          "description": "Pattern Type: Solid, Material: PU, Toe Shape: Pointed Toe ,Outsole Material: Rubber",
          "price": 57,
          "discountPercentage": 12,
          "rating": 4.41,
          "stock": 68,
          "brand": "The Warehouse",
          "category": "mens-shoes",
          "thumbnail": "https://i.dummyjson.com/data/products/58/thumbnail.jpg",
          "images": [
            "https://i.dummyjson.com/data/products/58/1.jpg",
            "https://i.dummyjson.com/data/products/58/2.jpg",
            "https://i.dummyjson.com/data/products/58/3.jpg",
            "https://i.dummyjson.com/data/products/58/4.jpg",
            "https://i.dummyjson.com/data/products/58/thumbnail.jpg"
          ]
        },
        {
          "id": 59,
          "title": "Spring and summershoes",
          "description": "Comfortable stretch cloth, lightweight body; ,rubber sole, anti-skid wear;",
          "price": 20,
          "discountPercentage": 8.71,
          "rating": 4.33,
          "stock": 137,
          "brand": "Sneakers",
          "category": "mens-shoes",
          "thumbnail": "https://i.dummyjson.com/data/products/59/thumbnail.jpg",
          "images": [
            "https://i.dummyjson.com/data/products/59/1.jpg",
            "https://i.dummyjson.com/data/products/59/2.jpg",
            "https://i.dummyjson.com/data/products/59/3.jpg",
            "https://i.dummyjson.com/data/products/59/4.jpg",
            "https://i.dummyjson.com/data/products/59/thumbnail.jpg"
          ]
        },
        {
          "id": 60,
          "title": "Stylish Casual Jeans Shoes",
          "description": "High Quality ,Stylish design ,Comfortable wear ,FAshion ,Durable",
          "price": 58,
          "discountPercentage": 7.55,
          "rating": 4.55,
          "stock": 129,
          "brand": "Sneakers",
          "category": "mens-shoes",
          "thumbnail": "https://i.dummyjson.com/data/products/60/thumbnail.jpg",
          "images": [
            "https://i.dummyjson.com/data/products/60/1.jpg",
            "https://i.dummyjson.com/data/products/60/2.jpg",
            "https://i.dummyjson.com/data/products/60/3.jpg",
            "https://i.dummyjson.com/data/products/60/thumbnail.jpg"
          ]
        },
        {
          "id": 51,
          "title": "half sleeves T shirts",
          "description": "Many store is creating new designs and trend every month and every year. Daraz.pk have a beautiful range of men fashion brands",
          "price": 23,
          "discountPercentage": 12.76,
          "rating": 4.26,
          "stock": 132,
          "brand": "Vintage Apparel",
          "category": "mens-shirts",
          "thumbnail": "https://i.dummyjson.com/data/products/51/thumbnail.jpg",
          "images": [
            "https://i.dummyjson.com/data/products/51/1.png",
            "https://i.dummyjson.com/data/products/51/2.jpg",
            "https://i.dummyjson.com/data/products/51/3.jpg",
            "https://i.dummyjson.com/data/products/51/thumbnail.jpg"
          ]
        },
        {
          "id": 52,
          "title": "FREE FIRE T Shirt",
          "description": "quality and professional print - It doesn't just look high quality, it is high quality.",
          "price": 10,
          "discountPercentage": 14.72,
          "rating": 4.52,
          "stock": 128,
          "brand": "FREE FIRE",
          "category": "mens-shirts",
          "thumbnail": "https://i.dummyjson.com/data/products/52/thumbnail.jpg",
          "images": [
            "https://i.dummyjson.com/data/products/52/1.png",
            "https://i.dummyjson.com/data/products/52/2.png",
            "https://i.dummyjson.com/data/products/52/3.jpg",
            "https://i.dummyjson.com/data/products/52/4.jpg",
            "https://i.dummyjson.com/data/products/52/thumbnail.jpg"
          ]
        },
        {
          "id": 53,
          "title": "printed high quality T shirts",
          "description": "Brand: vintage Apparel ,Export quality",
          "price": 35,
          "discountPercentage": 7.54,
          "rating": 4.89,
          "stock": 6,
          "brand": "Vintage Apparel",
          "category": "mens-shirts",
          "thumbnail": "https://i.dummyjson.com/data/products/53/thumbnail.jpg",
          "images": [
            "https://i.dummyjson.com/data/products/53/1.webp",
            "https://i.dummyjson.com/data/products/53/2.jpg",
            "https://i.dummyjson.com/data/products/53/3.jpg",
            "https://i.dummyjson.com/data/products/53/4.jpg",
            "https://i.dummyjson.com/data/products/53/thumbnail.jpg"
          ]
        },
        {
          "id": 54,
          "title": "Pubg Printed Graphic T-Shirt",
          "description": "Product Description Features: 100% Ultra soft Polyester Jersey. Vibrant & colorful printing on front. Feels soft as cotton without ever cracking",
          "price": 46,
          "discountPercentage": 16.44,
          "rating": 4.62,
          "stock": 136,
          "brand": "The Warehouse",
          "category": "mens-shirts",
          "thumbnail": "https://i.dummyjson.com/data/products/54/thumbnail.jpg",
          "images": [
            "https://i.dummyjson.com/data/products/54/1.jpg",
            "https://i.dummyjson.com/data/products/54/2.jpg",
            "https://i.dummyjson.com/data/products/54/3.jpg",
            "https://i.dummyjson.com/data/products/54/4.jpg",
            "https://i.dummyjson.com/data/products/54/thumbnail.jpg"
          ]
        },
        {
          "id": 55,
          "title": "Money Heist Printed Summer T Shirts",
          "description": "Fabric Jercy, Size: M & L Wear Stylish Dual Stiched",
          "price": 66,
          "discountPercentage": 15.97,
          "rating": 4.9,
          "stock": 122,
          "brand": "The Warehouse",
          "category": "mens-shirts",
          "thumbnail": "https://i.dummyjson.com/data/products/55/thumbnail.jpg",
          "images": [
            "https://i.dummyjson.com/data/products/55/1.jpg",
            "https://i.dummyjson.com/data/products/55/2.webp",
            "https://i.dummyjson.com/data/products/55/3.jpg",
            "https://i.dummyjson.com/data/products/55/4.jpg",
            "https://i.dummyjson.com/data/products/55/thumbnail.jpg"
          ]
        }
      ]
  routes.get("/", (req, res) => {
    res.json(summerCollection);
  });
  return routes;
};
