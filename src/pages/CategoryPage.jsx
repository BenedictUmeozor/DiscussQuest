import { useEffect, useState } from "react";
import axiosClient from "../axiosClient";
import Header from "../components/Header";
import Error from "../components/Error";
import Category from "../components/Category";
import { CategoryLoader } from "../components/SkeletonLoader";

export default function CategoryPage() {
  const [error, setError] = useState(false);
  const [categories, setCategories] = useState(null);

  const fetchCategories = async () => {
    setError(false);
    try {
      const { data } = await axiosClient.get("/categories");
      setCategories(data);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div>
      <Header />
      <div className="max-w-3xl mx-auto px-2 my-6">
        <h2 className="text-xl font-semibold">Categories</h2>
        <div className="my-6 grid md:grid-cols-2 gap-5">
          {error ? (
            <Error />
          ) : categories && categories.length > 0 ? (
            categories.map((category) => (
              <Category key={category.id} category={category} />
            ))
          ) : (
            <CategoryLoader />
          )}
        </div>
      </div>
    </div>
  );
}
