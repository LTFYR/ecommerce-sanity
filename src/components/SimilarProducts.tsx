"use client";
import React, { useEffect, useState } from "react";
import { IBreadCrumbType, IProductCardProps } from "@/interfaces/index";
import { Products } from "@/features/products/index";
import { products } from "@/mock/products";

const SimilarProducts: React.FC<IProductCardProps> = ({ product }) => {
  const [pro, setPro]: any[] = useState([]);
  const similarProducts: any[] = products.filter(
    (p) => p.category === product.category
  );

  useEffect(() => {
    setPro(similarProducts);
  }, []);

  console.log(pro);

  console.log(similarProducts);
  return <Products products={pro} />;
};

export default SimilarProducts;
