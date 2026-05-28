import { Routes } from '@angular/router';
import { homeRoute } from './routes/home.route';
import { productsRoute } from './routes/product.route';
import { createProductRoute } from './routes/create-product.route';

export const routes: Routes = [
  homeRoute,
  productsRoute,
  createProductRoute,
];
