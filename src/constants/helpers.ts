import { IBreadCrumbType, NavItem, IItem } from "@/interfaces/index";

export const navLinks: NavItem[] = [
  {
    label: "Products",
    href: "/products",
  },
  {
    label: "Categories",
    href: "/categories",
  },
];

export const substringText = (text: string, value: number): string => {
  return text.length > value ? `${text.substring(0, value)}...` : text;
};

export const calcTotal = (items: IItem[]): number => {
  return items
    .map((item) => ({ price: item.price, count: item.count }))
    .reduce(
      (previousValue, currentValue) =>
        previousValue + currentValue.price * currentValue.count,
      0
    );
};

export const formatPrice = (value: number): string => {
  return value.toFixed(2);
};
