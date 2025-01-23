import { create } from "zustand";
import { getProduct, getProducts } from "../services/productapi";

export type ProductType = {
  id: number;
  label: string | null;
  category: string;
  title: string;
  colors: number;
  price: number;
  discountedPrice: number | null;
  imageUrl: string;
  subImageUrls: string[];
  stockStatus: string | null;
  discount?: boolean;
};

type useProductListingStoreType = {
  products: ProductType[] | null;
  error: null | string;
  loading: boolean;
  getAllProducts: () => void;
  setProducts: (products: ProductType[]) => void;
  getProduct: (id: number) => ProductType | null;
  reset: () => void;
};

export const useProductListingStore = create<useProductListingStoreType>(
  (set, get) => ({
    products: null,
    error: null,
    loading: false,

    getAllProducts: async () => {
      set({ loading: true, error: null });
      try {
        const response = await getProducts();
        set({ products: response, loading: false });
      } catch (error) {
        set({ error: `Failed to fetch product data ${error}`, loading: false });
      }
    },

    setProducts: (products: ProductType[]) => {
      set(() => ({ products }));
    },

    getProduct: (id: number) => {
      return getProduct(id);
    },

    reset: () =>
      set({
        products: null,
        loading: false,
        error: null,
      }),
  })
);
