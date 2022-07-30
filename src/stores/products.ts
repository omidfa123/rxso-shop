import axios from 'axios';
import create from 'zustand';

interface Iproduct {
  _id: number;
  name: string;
  price: number;
  image: string;
  image2: string;
  thumbnail: string;
  englishName: string;
  createdAt: string;
}

type Store = {
  products: Iproduct[];
  singleProduct: Iproduct;
  originalProducts: Iproduct[];
  setProducts: (products: Iproduct[]) => void;
  setSingleProduct: (product: Iproduct) => void;
  sortProducts: (sortBy: string) => void;
  searchProducts: (search: string) => void;
  categoryProducts: (category: string) => void;
};

const useStore = create<Store>((set, get) => ({
  products: [],
  singleProduct: {
    _id: 0,
    name: 'کارت گرافیک انویدیاRTX2080',
    price: 2600000,
    image: '',
    image2: '/assets/img/cart.jpg',
    thumbnail: '',
    englishName: 'NVIDIA GeForce RTX 2080 Ti Founders Edition',
    createdAt: '',
  },
  originalProducts: [],
  setProducts: products =>
    set(state => ({ ...state, products, originalProducts: products })),
  setSingleProduct: (product: Iproduct) => {
    set(state => ({
      ...state,
      singleProduct: product,
    }));
  },
  categoryProducts: async (category: string) => {
    const state = get();
    if (category === 'all') {
      return set(state => ({ ...state, products: state.originalProducts }));
    }
    const { data } = await axios.get(`/api/products/${category}`);
    set(state => ({ ...state, products: data.data }));
  },
  searchProducts: (search: string) => {
    const state = get();
    const products = state.originalProducts.filter(product =>
      product.englishName.toLowerCase().includes(search.toLowerCase())
    );
    set(state => ({ ...state, products }));
  },
  sortProducts: (option: string) => {
    if (option === 'lowest') {
      set(state => ({
        ...state,
        products: state.products.sort((a, b) => a.price - b.price),
      }));
    }
    if (option === 'highest') {
      set(state => ({
        ...state,
        products: state.products.sort((a, b) => b.price - a.price),
      }));
    }
    if (option === 'newest') {
      set(state => ({
        ...state,
        products: state.products.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        ),
      }));
    }
    if (option === 'original') {
      set(state => ({
        ...state,
        products: state.products.sort(
          (a, b) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        ),
      }));
    }
  },
}));

export default useStore;
