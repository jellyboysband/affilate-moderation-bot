import mongoose, { Document } from 'mongoose';

export interface IProduct extends Document {
  _id: string;
  title: string;
  rate: number;
  price: number;
  url: number;
  image: string;
  language: 'en' | 'ru';
}

export const ProductSchema = new mongoose.Schema(
  {
    _id: String,
    title: String,
    rate: Number,
    price: Number,
    url: Number,
    image: String,
    language: String
  },
  { _id: false }
);

const Product = mongoose.model<IProduct>('Product', ProductSchema);
export default Product;
