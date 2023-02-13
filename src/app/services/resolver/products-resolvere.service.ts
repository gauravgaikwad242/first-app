import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ProductListServiceService } from '../product-list-service.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsResolvereService implements Resolve<any>{

  constructor(private products:ProductListServiceService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  return this.products.getAllProduct();
  }


}
