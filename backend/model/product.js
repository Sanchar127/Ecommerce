import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter the product name"],
  },
  description: {
    type: String,
    required: [true, "please enter the description"],
  },

  price: {
    type: Number,
    required: [true, "please enter the price"],
  },
  images: [
    {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "please enter the product price"],
    enum: {
      values: [
        "Electronic",
        "Camera",
        "Laptops",
        "Accessories",
        "HeadPhones",
        "Sport",
      ],
      message: "please select correct  category",
    },
  },
  seller: {
    type: String,
    required: [true, "please enter Product seller"],
  },

  stock: {
    type: Number,
    required: [true, "please enter the product stock"],
  },

  rating: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Product ||
  mongoose.model("Product", productSchema);
