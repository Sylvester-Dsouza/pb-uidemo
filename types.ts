export interface ProductAttribute {
  label: string;
  value: string;
}

export interface RelatedProduct {
  id: string;
  image: string;
  name: string;
}

export interface ProductData {
  id: string;
  code: string;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  description: string;
  images: string[];
  attributes: ProductAttribute[];
  tags: string[];
  coordinated: RelatedProduct[];
}