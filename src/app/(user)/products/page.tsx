import { products } from "@/mock/products";
import { Products } from "@/features/products/index";
import React from "react";
import { Hero } from "@/components/hero/Hero";
import { client } from "@/utils/sanity.client";
import { groq } from "next-sanity";
import { IProduct } from "@/interfaces";

const getAllProductsQueries: string = `
    *[_type == "product"] {
        "id": _id,
        name,
        description,
        price,   
        rating,
        "slug": slug.current,
        "mainImage": mainImage.asset->url,
    }
`;

const getProductsAsync = () => {
  return client.fetch(groq`${getAllProductsQueries}`);
};

export const revalidate = 60;

export default async function ProductsPage() {
  const products: IProduct[] = await getProductsAsync();
  return (
    <>
      <div>
        <Hero
          heading="Technology for your convenience"
          description="Quality and Durability,Fast delivery. Free shipping and more things"
          btnContent="See all categories"
          bntLink="/categories"
          imageUrl="/hero.png"
        />
      </div>
      <Products products={products} />
    </>
  );
}
