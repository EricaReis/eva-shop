import { Tracing } from "trace_events";

export interface IProduct {
  category_id: string;
  created_at: string;
  id: string;
  images: IProductImage[];
  name: string;
  price: string;
  promotional_price: string;
  stars: number;
  updated_at: string;
}

export interface IProductImage {
  created_at: string;
  id: string;
  path: string;
  product_id: string;
  updated_at: string;
}