import { ourProducts } from "./OurProductsData";
import { products } from "./ProductsData";
import { sellingProducts } from "./SellingProductsData";

export const detailProduct = [...products, ...sellingProducts, ...ourProducts]