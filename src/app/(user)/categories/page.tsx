import { categories } from "@/mock/categories";
import { Hero } from "@/components/hero/Hero";
import React from "react";
import AllCategories from "@/features/categories/AllCategories";
import { client } from "@/utils/sanity.client";
import { groq } from "next-sanity";
import { ICategory } from "@/interfaces";

const getAllCategoriesQueries = `
    *[_type == "category"] {
        "id": _id,
        name,
        "slug": slug.current,
        "image": image.asset->url 
    }
`;

const getCategoriesAsync = () => {
  return client.fetch(groq`${getAllCategoriesQueries}`);
};

export const revalidate = 60;

const Categories = async () => {
  const categories: ICategory[] = await getCategoriesAsync();
  return (
    <>
      <Hero
        heading="Explore our Categories"
        description="Here is our all categories"
        btnContent="See all products"
        bntLink="/products"
        imageUrl="/categ.png"
      />
      <AllCategories categories={categories} />
    </>
  );
};

export default Categories;
