import { useParams } from "react-router";
import { useState, useEffect } from "react";

function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/${productId}`,
        );
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [productId]);
  if (!product) {
    return <p>Loading...</p>;
  }
  return (
    <main className="mx-auto max-w-4xl px-6 py-10">
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-slate-900">
        {product.title}
      </h1>
      <section>
        <article className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm md:grid-cols-2">
          <img
            className="h-80 w-full object-cover md:h-full"
            src={product.thumbnail}
            alt={product.title}
          />
          <div className="p-6 md:p-8">
            <p className="text-xl font-bold text-indigo-600">
              {" "}
              {product.price}
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              {" "}
              {product.description}
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}

export default ProductDetails;
