import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8080' });

API.interceptors.request.use((req)=>{
  if(sessionStorage.getItem('user')){
    req.headers.authorization = `Bearer ${JSON.parse(sessionStorage.getItem('user')).token}`
  }
  return req;
})

export const getProducts = ()=> API.get('/products');
export const productDetails = (productId) => API.get(`/products/${productId}`);
export const createProduct = (newProduct)=> API.post('/products', newProduct);

export const getCategories = ()=> API.get('/category');

export const signIn = (data) => API.post('/signin', data);
export const signUp = (formData) => API.post('/signup', formData);