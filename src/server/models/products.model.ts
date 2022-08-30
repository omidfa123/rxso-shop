import mongoose from 'mongoose';

const productsSchema = new mongoose.Schema({
  category: {
    type: String,
    required: [true, 'Category is required'],
  },
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  englishName: {
    type: String,
    required: [true, 'English name is required'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
  },
  special_price: {
    type: Number,
    required: [true, 'Special price is required'],
  },
  thumbnail: {
    type: String,
    required: [true, 'Thumbnail is required'],
  },
  image: {
    type: String,
    required: [true, 'Image is required'],
  },
  image2: {
    type: String,
    required: [true, 'Image is required'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Products =
  mongoose.models.Products || mongoose.model('Products', productsSchema);

export default Products;
