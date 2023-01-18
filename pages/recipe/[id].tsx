/* eslint-disable @next/next/no-img-element */
import { useRecipes } from "@/lib/contentful";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const RecipeDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [recipe, setRecipe] = useState<any>();
  const { recipes } = useRecipes();

  useEffect(() => {
    if (recipes) {
      const currentRecipe = recipes.find((r) => r.sys.id === id);
      setRecipe(currentRecipe);
    }
  }, [recipes, id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-medium mb-4">{recipe.fields.title}</h1>
      <img
        src={recipe.fields.image.fields.file.url}
        alt={recipe.fields.title}
        className="w-full h-48 object-cover mb-4"
      />
      <p className="mb-4">{recipe.fields.description}</p>
      <div className="mb-4">
        <h2 className="text-lg font-medium mb-2">Ingredients</h2>
        <ul>
          {recipe.fields.ingredients.map((ingredient: any) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-lg font-medium mb-2">Instructions</h2>
        <p>{recipe.fields.instructions}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-medium mb-2">Prep Time</h2>
        <p>{recipe.fields.prepTIme} minutes</p>
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-medium mb-2">Cook Time</h2>
        <p>{recipe.fields.cookTime} minutes</p>
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-medium mb-2">Servings</h2>
        <p>{recipe.fields.servings}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-medium mb-2">Category</h2>
        <p>{recipe.fields.category.fields.title}</p>
      </div>
    </div>
  );
};

export default RecipeDetail;
