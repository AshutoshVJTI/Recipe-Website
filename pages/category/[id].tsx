/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecipes } from "../../lib/contentful";

const CategoryDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [category, setCategory] = useState<any>();
  const { categories, recipes } = useRecipes();

  useEffect(() => {
    if (categories) {
      const currentCategory = categories.find((r) => r?.sys?.id === id);
      setCategory(currentCategory);
    }
  }, [categories, id]);

  if (!categories || !category) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center">
        <img
          src={category.fields.image.fields.file.url}
          alt={category.fields.title}
          className="w-64 rounded-lg"
        />
        <h1 className="text-2xl font-medium text-center">
          {category.fields.title}
        </h1>
        <p className="text-center text-gray-600">
          {category?.fields?.description}
        </p>
      </div>
      <h2 className="text-2xl font-medium text-center mt-8">
        Recipes in this category:
      </h2>
      <div className="grid grid-cols-4 gap-4">
        {recipes
          .filter((recipe: any) => recipe.fields.category?.sys.id === id)
          .map((recipe: any) => {
            console.log(recipe);
            return (
              <div key={recipe.id} className="relative">
                <img
                  src={recipe.fields.image.fields.file.url}
                  alt={recipe.fields.title}
                  className="w-full rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 p-2">
                  <Link href="/recipe/[id]" as={`/recipe/${recipe.sys.id}`}>
                    <div className="text-xl font-medium text-white hover:text-orange-500">
                      {recipe.fields.title}
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default CategoryDetail;
