import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function BrandList() {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/brands")
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  if (loading) return <p>Loading brands...</p>;

  return (
    <div className="d-flex flex-wrap justify-content-center gap-4 my-4">
      {brands.map((brand) => (
        <div key={brand.id} className="text-center">
          <Image src={brand.logo} alt={brand.name} width={80} height={80} />
          <p>{brand.name}</p>
        </div>
      ))}
    </div>
  );
}
