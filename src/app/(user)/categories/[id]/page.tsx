import { Products } from "@/features/products/index";
import { Hero } from "@/components/hero/Hero";
import React from "react";
import { products } from "@/mock/products";
import { Breadcumbs } from "@/components/Breadcumb";
import {
  IBreadCrumbType,
  IProduct,
  IProductCardProps,
} from "@/interfaces/index";
import { groq } from "next-sanity";
import { client } from "@/utils/sanity.client";

const query: string = groq`
    *[_type == "product" && references($id)] {
        ...,
        "id": _id,
        "slug": slug.current,
        "mainImage": mainImage.asset->url,
        category->{ name, "image": image.asset->url  },
    }
`;

export const revalidate = 60;

type Props = {
  params: {
    id: string;
  };
};

export const items: IBreadCrumbType[] = [
  {
    name: "Products",
    link: "/products",
  },
  {
    name: "Categories",
    link: "/categories",
  },
];
async function CategoryProducts({ params: { id } }: Props) {
  const products: IProduct[] = await client.fetch(query, { id });
  return (
    <>
      <Hero
        heading={products[0]?.category?.name}
        bntLink="/categories"
        btnContent="See All Categories"
        description={`Our Best and Amazing ${products[0]?.category?.name}`}
        imageUrl={products[0]?.category?.image}
      />
      <Breadcumbs
        items={[
          ...items,
          {
            name: products[0]!.category!.name,
            link: "#",
          },
        ]}
      />
      <Products products={products} />
    </>
  );
}

export default CategoryProducts;
