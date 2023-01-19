/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useCategories } from '../lib/contentful';
import Typo from "./Typo";

const PopularCategories = () => {
  const { categories } = useCategories();

  return (
    <div className="my-8 container">
      <Typo fontFamily="Playfair Display" className="text-4xl font-bold my-8">
        Popular Categories
      </Typo>
      <div className="flex flex-wrap justify-center">
        {categories.slice(0, 6).map((category) => (
          <div key={category.sys.id} className="p-4 hover:text-orange-600">
            <Link href="/category/[id]" as={`/category/${category.sys.id}`}>
              <div className="relative rounded-full overflow-hidden">
                <img
                  className="w-40 h-40 object-cover hover:scale-110"
                  src={category.fields.image.fields.file.url}
                  alt={category.fields.title}
                  style={{transition: "0.2s all ease-in-out"}}
                />
              </div>
              <div className="mt-2 text-center text-lg font-semibold">
                {category.fields.title}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCategories;
