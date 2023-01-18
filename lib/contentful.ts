import { useState, useEffect } from "react";
import { createClient } from "contentful";

const client = createClient({
  space: "s11lro6hn87h",
  accessToken: "RazxCxrsnUsYU9yZ8628Fo0oUqtZOoWjMn5p2KJN4EA",
});

export const useRecipes = () => {
  const [recipes, setRecipes] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [logo, setLogo] = useState<string>();

  useEffect(() => {
    client
      .getEntries({
        content_type: "recipe",
      })
      .then((response: any) => {
        setRecipes(response.items);
        setLoading(false);
      });
    client
      .getEntries({
        content_type: "category",
      })
      .then((response: any) => {
        setCategories(response.items);
      });
      client.getAsset('2L6leRWVJdnVekF5eGwYXr')
      .then(asset => {
        setLogo(asset.fields.file.url);
      })
  }, []);

  return { recipes, categories, loading, logo };
};
