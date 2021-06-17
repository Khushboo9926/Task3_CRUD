import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  fb:FormBuilder=new FormBuilder;
  productForm:any;
  currentId:any;
  currentProductData:any;
  constructor(private activeRoute: ActivatedRoute, private productService: ProductService, private route:Router) {
    this.currentId = activeRoute.snapshot.params.id ;
   }

  ngOnInit(): void {
   

    this.productForm = this.fb.group({
      "productname":this.fb.control("", Validators.required),
      "productprice":this.fb.control(0, Validators.required),
      "discount":this.fb.control(0, [Validators.min(0),Validators.max(5)]),
      "type":this.fb.control("", Validators.required)
    })
    
    this.productService.returnProductById(this.currentId).subscribe((res)=>{
      this.currentProductData = res ;
      this.productForm.patchValue(this.currentProductData);
    })
   
  }

  updateForm(){
    this.productService.updateProductById(this.currentId,this.productForm.value).subscribe(()=>{
      this.route.navigate(["/dashboard/product"]);

    })
    

  }
}
