import { TopCategories } from "@/features/home/Categories";
import { Banner } from "@/features/home/Banner";
import { FeaturedProducts } from "@/features/home/FeaturedProducts";
import { featureItems } from "@/mock/features";
import { client } from "@/utils/sanity.client";
import { groq } from "next-sanity";
import { IFeaturedProducts } from "@/interfaces";

const getAllFeaturedProductsQueries = `
    *[_type == "featuredProductsAndCategories"]{
        "topCategories": topCategories[]->{
            "id": _id,
            name,
            "slug": slug.current,
            "image": image.asset->url,
        },
        "bestDeals": bestDeals[]->{
            "id": _id,
            name,
            description,
            price,
            "slug": slug.current,
            rating,
            "mainImage": mainImage.asset->url,
        },
        "trendingProducts": trendingProducts[]->{
            "id": _id,
            name,
            description,
            price,
            "slug": slug.current,
            rating,
            "mainImage": mainImage.asset->url,
        },
        "mostSellingProducts": mostSellingProducts[]->{
            "id": _id,
            name,
            description,
            price,
            "slug": slug.current,
            rating,
            "mainImage": mainImage.asset->url,
        }
    }
`;

const getFeaturedProductsAsync = () => {
  return client.fetch(groq`${getAllFeaturedProductsQueries}`);
};

export const revalidate = 60;

export default async function Home() {
  const featuredItems: IFeaturedProducts[] = await getFeaturedProductsAsync();

  return (
    <div className="flex items-center justify-center">
      <Banner />
      <TopCategories categories={featuredItems[0].topCategories} />
      <FeaturedProducts
        products={featuredItems[0].trendingProducts}
        title="Featured Products"
      />
      <FeaturedProducts
        products={featuredItems[0].bestDeals}
        title="Best Deals For You"
      />
      <FeaturedProducts
        products={featuredItems[0].mostSellingProducts}
        title="Most Selling Products"
      />
    </div>
  );
}
