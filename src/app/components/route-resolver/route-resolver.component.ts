import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductListServiceService } from 'src/app/services/product-list-service.service';

@Component({
  selector: 'app-route-resolver',
  templateUrl: './route-resolver.component.html',
  styleUrls: ['./route-resolver.component.css']
})
export class RouteResolverComponent implements OnInit {
productss:any[]=[]
  constructor(private products:ActivatedRoute) { }

  ngOnInit(): void {
    // this.products.getAllProduct().subscribe((data)=>{
    //  this.productss=data?.products?.[0].images
    //   console.log(data?.products?.[0].images)
    // })

    this.products.data.subscribe((response:any)=>{
      console.log(response)
      this.productss=response?.products?.products?.[0].images
    })
  }

}
