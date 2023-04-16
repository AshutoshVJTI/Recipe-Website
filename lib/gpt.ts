import axios from "axios";
import { useState } from "react";

export const getRecipe = async (recipeName: string) => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/engines/davinci-codex/completions",
      {
        prompt: `Please give me a recipe for ${recipeName}`,
        max_tokens: 100,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer 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`,
        },
      }
    );

    const recipeData = response.data.choices[0].text;

    // Parse recipe data to extract the relevant information
    const titleRegex = /Title:\s(.*)/;
    const title = recipeData.match(titleRegex)[1];

    const descriptionRegex = /Description:\s(.*)/;
    const description = recipeData.match(descriptionRegex)[1];

    const imageRegex = /Image:\s(.*)/;
    const image = recipeData.match(imageRegex)[1];

    const ingredientsRegex = /Ingredients:\s(.*)/;
    const ingredients = recipeData.match(ingredientsRegex)[1].split(", ");

    const instructionsRegex = /Instructions:\s(.*)/;
    const instructions = recipeData.match(instructionsRegex)[1];

    const prepTimeRegex = /Prep Time:\s(.*)/;
    const prepTime = recipeData.match(prepTimeRegex)[1];

    const cookTimeRegex = /Cook Time:\s(.*)/;
    const cookTime = recipeData.match(cookTimeRegex)[1];

    const servingsRegex = /Servings:\s(.*)/;
    const servings = recipeData.match(servingsRegex)[1];

    return {
      title,
      description,
      prepTime,
    };
  } catch (error) {
    console.log(error);
  }
};
