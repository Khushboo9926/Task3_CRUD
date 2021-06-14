import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productData:Array<any> = [];
  constructor() { }

  addProduct(data:any){
    data.id=this.productData.length+1;
      this.productData.push(data);
  }

  returnProduct(){
      return this.productData;
  }

  returnProductById(id:number){
    return this.productData.find(p => p.id == id)
  }

  updateProductById(id:any, data:any){
    //find object from array and its index
    let index = this.productData.findIndex(p => p.id == id);
    //update the data
    data.id  =id;
    this.productData[index]=data;

    

  }

  deleteProductById(id:any){
    let index = this.productData.findIndex( p => p.id == id);
    this.productData.splice(index,1);
  }
}
