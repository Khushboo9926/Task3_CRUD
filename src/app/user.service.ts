import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userData:Array<any> = [];
  // constructor() { }

  // addUser(data:any){
  //   data.id=this.userData.length+1;
  //     this.userData.push(data);
  // }

  // returnUser(){
  //     return this.userData;
  // }

  // returnUserById(id:number){
  //   return this.userData.find(p => p.id == id)
  // }

  // updateUserById(id:any, data:any){
  //   //find object from array and its index
  //   let index = this.userData.findIndex(p => p.id == id);
  //   //update the data
  //   data.id  =id;
  //   this.userData[index]=data;

    

  // }


  // deleteUserById(id:any){
  //   let index = this.userData.findIndex( p => p.id == id);
  //   this.userData.splice(index,1);
  // }
 
  constructor(private http:HttpClient) { }

  addUser(data:any){
   return this.http.post('https://60c780b1afc88600179f5429.mockapi.io/khushboo/users', data )
  }

  returnUser(){
      return this.http.get('https://60c780b1afc88600179f5429.mockapi.io/khushboo/users')
  }
 

  returnUserById(id:number){
    return this.http.get(`https://60c780b1afc88600179f5429.mockapi.io/khushboo/users/${id}`)
  }

  updateUserById(id:any, data:any){
    //find object from array and its index
    // let index = this.productData.findIndex(p => p.id == id);
    // //update the data
    // data.id  =id;
    // this.productData[index]=data;
     return this.http.put(`https://60c780b1afc88600179f5429.mockapi.io/khushboo/users/${id}`, data)

  }

  deleteUserById(id:any){
    // let index = this.productData.findIndex( p => p.id == id);
    // this.productData.splice(index,1);
    return this.http.delete(`https://60c780b1afc88600179f5429.mockapi.io/khushboo/users/${id}`)

    
  }

}
