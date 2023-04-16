import React, { useState } from "react";
import axios from "axios";
import { getRecipe } from "@/lib/gpt";

const AiRecipes: React.FC = () => {
  const [recipeName, setRecipeName] = useState("");
  const [recipe, setRecipe] = useState<any>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRecipeName(event.target.value);
  };

  const handleSubmit = async () => {
    const response = await getRecipe(recipeName);
  };

  return (
    <div className="container mx-auto py-4">
      <form>
        <div className="flex items-center mb-4">
          <input
            className="bg-gray-200 p-2 rounded-lg w-full"
            type="text"
            placeholder="Enter recipe name"
            value={recipeName}
            onChange={handleChange}
          />
          <button onClick={handleSubmit} className="bg-orange-500 text-white p-2 rounded-lg ml-4">
            Search
          </button>
        </div>
      </form>
      {/* {recipe && (
        <div>
          <h2 className="text-2xl font-medium mb-2">{recipe.title}</h2>
          <p className="text-gray-600 mb-4">{recipe.description}</p>
          <img src={recipe.image} alt={recipe.title} className="w-64 mb-4" />
          <h3 className="text-xl font-medium mb-2">Ingredients:</h3>
          <ul>
            {recipe.ingredients?.map((ingredient: string, index: number) => (
              <li key={index} className="text-gray-600">
                {ingredient}
              </li>
            ))}
          </ul>
          <h3 className="text-xl font-medium mb-2">Instructions:</h3>
          <p className="text-gray-600 mb-4">{recipe.instructions}</p>
          <div className="flex mb-4">
            <div className="w-1/3">
              <p className="text-gray-600">Prep Time:</p>
              <p className="text-gray-600">{recipe.prepTime} minutes</p>
            </div>
            <div className="my-4">
              <p className="text-gray-600">Cook Time:</p>
              <p className="text-gray-600">{recipe.cookTime} minutes</p>
            </div>
            <div className="my-4">
              <p className="text-gray-600">Servings:</p>
              <p className="text-gray-600">{recipe.servings}</p>
            </div>
            <div className="my-4">
              <p className="text-gray-600">Category:</p>
              <p className="text-gray-600">{recipe.category}</p>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default AiRecipes;
