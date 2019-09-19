import mongoose, { Document } from 'mongoose';
import { IProduct } from './Product';

export interface IUser extends Document {
  _id: string;
  created: number;
  username: string;
  name: string;
  currentProduct: IProduct;
  lastActivity: number;
  language: 'en' | 'ru';
  totalProducts: number;
}

export const UserSchema = new mongoose.Schema(
  {
    _id: String,
    created: Number,
    username: String,
    name: String,
    currentProduct: {
      type: String,
      ref: 'Product'
    },
    lastActivity: Number,
    language: String,
    totalProducts: Number
  },
  { _id: false }
);

UserSchema.pre('find', function() {
  this.populate('currentProduct');
}).pre('findOne', function() {
  this.populate('currentProduct');
});

const User = mongoose.model<IUser>('User', UserSchema);
export default User;
