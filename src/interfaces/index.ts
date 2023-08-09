import { ReactNode } from "react";

export type ProductKey = "cart" | "wishlist" | "checkout";

export interface NavItem {
  label: string;
  href: string;
}

export interface FeaturesTitleProps {
  title: string;
}

export interface FeaturedProductProps {
  title: string;
  products: IProduct[];
}

///product
export interface IRating {
  rate: number;
  count: number;
}

export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: IRating;
  slug: string;
  mainImage: string;
  category: ICategory;
  gallery: string[];
}

export interface ICategory {
  id: string;
  name: string;
  slug: string;
  image: string;
}

export interface IFeaturedProducts {
  topCategories: ICategory[];
  bestDeals: IProduct[];
  mostSellingProducts: IProduct[];
  trendingProducts: IProduct[];
}

///interfaces

export interface IRatingProps {
  rating: IRating;
}

export interface IProductCardProps {
  product: IProduct;
}

export interface ITopCategoriesProps {
  categories: ICategory[];
}

export interface ITopCategoryCardProps {
  category: ICategory;
}

export interface IProductsProps {
  products: IProduct[];
}

export interface IHeroProps {
  heading: string;
  description: string;
  bntLink: string;
  imageUrl: string;
  btnContent: string;
}

export interface IAllCategoriesProps {
  categories: ICategory[];
}

export interface IQuantityProps {
  step?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  disabled?: boolean;
  // setQuantity: (valueAsString: string, valueAsNumber: number) => void;
}

export interface IBreadCrumbType {
  name: string;
  link: string;
}

export interface IBreadcrumbProps {
  items?: IBreadCrumbType[];
}

export interface IState {
  cart: IItem[];
  checkout: IItem[];
  wishlist: IItem[];
}

export interface IItem extends IProduct {
  count: number;
}

export interface IContext {
  state: IState;
  checkBasket: (key: ProductKey, productId: string) => boolean;
  addToCart: (key: ProductKey, product: IProduct, count?: number) => void;
  removeFromCart: (key: ProductKey, productId: string) => void;
  increase: (key: ProductKey, productId: string) => void;
  decrease: (key: ProductKey, productId: string) => void;
  reset: (key: ProductKey) => void;
}

export interface IAddToCartProps {
  product: IProduct;
  count?: number;
}

export interface IAppContextProviderProps {
  children: ReactNode;
}
