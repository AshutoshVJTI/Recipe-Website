/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { useRecipes } from '../../lib/contentful';

const CategoryDetail = () => {
    const router = useRouter();
  const { id } = router.query;
  const [category, setCategory] = useState<any>();
  const { categories, recipes } = useRecipes();
  console.log(categories)

  useEffect(() => {
    if (categories) {
      const currentCategory = categories.find((r) => r.sys.id === id);
      setCategory(currentCategory);
    }
  }, [categories, id]);

  if (!categories) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* <div className="text-center mb-6">
        <h1 className="text-2xl font-medium">{category.fields.title}</h1>
        <p className="text-gray-600">{category.fields.description}</p>
        <img src={category.fields.image.fields.file.url} alt={category.fields.title} className="w-64 h-64 mx-auto rounded-full object-cover" />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {category.fields.recipis.map((category: any) => (
          <Link href="/recipe/[id]" as={`/recipe/${recipe.sys.id}`}>
            <a>
              <div className="relative rounded-lg overflow-hidden">
                <img className="w-full h-48 object-cover" src={recipe.fields.image.fields.file.url} alt={recipe.fields.title}/>
              </div>
              <div className="mt-2 text-center text-lg">{recipe.fields.title}</div>
            </a>
          </Link>
        ))}
      </div> */}
    </div>
  )
}

export default CategoryDetail
