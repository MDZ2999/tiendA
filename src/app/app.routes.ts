import { Routes } from '@angular/router';
import { homeRoute } from './routes/home.route';
import { Products } from './pages/components/products/products';
import { CreateProduct } from './pages/components/createProduct/createProduct';

export const routes: Routes = [
  homeRoute,

     {
        path: 'products',
        component: Products,
    },
     {
        path: 'create-product',
        component: CreateProduct,
     }
];
