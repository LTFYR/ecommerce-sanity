import ProductDetail from "@/features/products/ProductDetail";
import { IProduct } from "@/interfaces";
import { products } from "@/mock/products";
import { client } from "@/utils/sanity.client";
import { groq } from "next-sanity";
import React, { useState } from "react";

type Props = {
  params: {
    slug: string;
  };
};
const query: string = groq`
    *[_type == "product" && slug.current == $slug][0] {
      ...,
      "id": _id,
      "slug": slug.current,
        "mainImage": mainImage.asset->url,
        category->{
            name,
            "id": _id,
            "image": image.asset->url
        },
        "gallery": gallery[].asset->url
    }
`;

async function ProductDetailPage({ params: { slug } }: Props) {
  const product: IProduct = await client.fetch(query, { slug });
  return (
    <>
      <ProductDetail product={product} />
    </>
  );
}

export default ProductDetailPage;
