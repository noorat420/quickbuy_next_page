// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {

 const brands = [
    { id: 1, name: "Apple", logo: "/assets/images/brands/apple.jpg" },
    { id: 2, name: "Samsung", logo: "/assets/images/brands/samsung.avif" },
    { id: 3, name: "Nike", logo: "/assets/images/brands/nike.jpg" },
    { id: 4, name: "Adidas", logo: "/assets/images/brands/Adidas.png" },
    { id: 5, name: "Sony", logo: "/assets/images/brands/sony.png" },
  ];


  res.status(200).json(brands);
}
