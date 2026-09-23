import { useState, useEffect } from "react";
import { Link } from "react-router";

function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products?limit=4");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-slate-900">
        Home Page
      </h1>
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <article
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            key={product.id}
          >
            <img
              className="h-48 w-full object-cover"
              src={product.thumbnail}
              alt={product.title}
            />
            <div className="p-4">
              <h2 className="text-base font-semibold text-slate-900">
                {product.title}
              </h2>
              <p className="mt-2 text-sm font-medium text-indigo-600">
                {" "}
                {product.price}
              </p>
            </div>
          </article>
        ))}
      </section>
      <Link
        to="/products"
        className="mt-8 inline-flex rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700"
      >
        View All
      </Link>
    </main>
  );
}

export default Home;
