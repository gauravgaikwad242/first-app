import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathHelperService {

  constructor() {
    console.log("service math started")
   }

  add(a:any,b:any){
    return a+b;
  }
}
