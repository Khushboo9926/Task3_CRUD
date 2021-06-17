import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productData:Array<any> = [];
  constructor(private http:HttpClient) { }

  addProduct(data:any){
   return this.http.post('https://60c780b1afc88600179f5429.mockapi.io/khushboo/products', data )
  }

  returnProduct(){
      return this.http.get('https://60c780b1afc88600179f5429.mockapi.io/khushboo/products')
  }
 

  returnProductById(id:number){
    return this.http.get(`https://60c780b1afc88600179f5429.mockapi.io/khushboo/products/${id}`)
  }

  updateProductById(id:any, data:any){
    //find object from array and its index
    // let index = this.productData.findIndex(p => p.id == id);
    // //update the data
    // data.id  =id;
    // this.productData[index]=data;
     return this.http.put(`https://60c780b1afc88600179f5429.mockapi.io/khushboo/products/${id}`, data)

  }

  deleteProductById(id:any){
    // let index = this.productData.findIndex( p => p.id == id);
    // this.productData.splice(index,1);
    return this.http.delete(`https://60c780b1afc88600179f5429.mockapi.io/khushboo/products/${id}`)

    
  }
}
