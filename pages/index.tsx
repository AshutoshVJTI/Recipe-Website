import React, { useState } from "react";
import { useRecipes } from "../lib/contentful";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RecipeCarousel from "@/components/RecipeCarousel";
import PopularCategories from "@/components/PopularCategories";

const HomePage = () => {
  const { recipes, categories, loading } = useRecipes();
  const [filteredRecipes, setFilteredRecipes] = useState<any[]>([]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Header />
      <RecipeCarousel />
      <PopularCategories />
      <Footer />
    </div>
  );
};

export default HomePage;
