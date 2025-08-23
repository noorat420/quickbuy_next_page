import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { fetchProduct } from "../../store/ProductDetailSlice";
import style from "../styles/productdetail.module.css";

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query; // get dynamic route param

  const dispatch = useDispatch();
  const { product, inProgress, error } = useSelector(
    (state) => state.productdetail
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchProduct(id));
    }
  }, [dispatch, id]);

  const backpage = () => {
    router.push("/products"); // navigate back
  };

  if (inProgress) {
    return <p className={style.loading}>Loading product details...</p>;
  }

  if (error) return <p>Error: {error}</p>;

  return (
    <div className={style.container}>
      <div className={style.card}>
        <div className={style.imageWrapper}>
          <img src={product.image} alt={product.title} />
        </div>
        <div className={style.details}>
          <h2>{product.title}</h2>
          <p>
            <strong>Category:</strong> {product.category}
          </p>
          <p>
            <strong>Description:</strong> {product.description}
          </p>
          <p>
            <strong>Price:</strong> ₹{product.price}
          </p>
          <p>
            <strong>Rating:</strong> ⭐ {product.rating?.rate} (
            {product.rating?.count} reviews)
          </p>
          <button onClick={backpage} className={style.backbutton}>
            ← Back to Products
          </button>
        </div>
      </div>
    </div>
  );
}
