import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../store/ProductSlice";
import styles from "../styles/productlist.module.css";
import Link from "next/link";
import Image from "next/image";
import Loading from "../components/Loading";
import { addToCart } from "../../store/CartSlice";


function ProductList() {
  
  const dispatch = useDispatch();
  
  const { products, inProgress, error } = useSelector(
    (state) => state.productlist
  );


  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (inProgress) return <Loading/>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <h2 className={styles.h2}>🛍️ Shop Your Favorite Products</h2>
      <div className={styles.productGrid}>
        {products.map((prod) => (
          <div className={styles.card} key={prod.id}>
            <div className={styles.imageContainer}>
              <Link href={`/products/${prod.id}`}>
                <Image
                  className={styles.productImg}
                  src={prod.image}
                  alt={prod.title}
                  width={300}
                  height={300}
                />
              </Link>
            </div>
            <p className={styles.title}>{prod.title}</p>
            <span className={styles.category}>{prod.category}</span>
            <p className={styles.description}>{prod.description}</p>
            <div className={styles.flexInfo}>
              <span className={styles.rating}>⭐ {prod.rating?.rate}</span>
              <span className={styles.count}>
                ({prod.rating?.count} reviews)
              </span>
            </div>
            <h3 className={styles.price}>₹ {prod.price}</h3>
           <button
  className="btn btn-primary"
  onClick={() => {
    dispatch(addToCart(prod));
    alert(`🛒 "${prod.title}" added to cart!`);
  }}
>
  Add to Cart
</button>
          </div>
        ))}
      </div>
    </>
  );
}


export default ProductList;
