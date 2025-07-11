import { Component } from '@angular/core';
import { ProductServices } from '../services/product-services';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  imports: [CommonModule,FormsModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  productList:any;
  constructor(private productservice:ProductServices){ }

  ngOnInit(){
    this.productservice.getProductList().subscribe((data:any)=>{
      console.log("data: ",data.products);    
      this.productList = data.products;  
    })
  }
}
