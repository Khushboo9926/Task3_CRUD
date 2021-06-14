import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productList:Array<any>=[]
  constructor(private productService:ProductService){

  }
  ngOnInit(): void {
   this.productList= this.productService.returnProduct();
  }

  deleteprod(id:any){
    this.productService.deleteProductById(id);    
  
}

}


// /dashboard

// /product-list
// /product-create
// /product-edit/:id
// /product-view/:id

// /user-list
// /user-create
// /user-edit/:id
// /user-view/:id

// https://startbootstrap.com/previews/sb-admin