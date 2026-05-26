import { Routes } from '@angular/router';
import { homeRoute } from './routes/home.route';
import { Products } from './pages/components/products/products';

export const routes: Routes = [
  homeRoute,

     {
        path: 'products',
        component: Products,
    },
];
