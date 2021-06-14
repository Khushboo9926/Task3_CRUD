import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userData:Array<any> = [];
  constructor() { }

  addUser(data:any){
    data.id=this.userData.length+1;
      this.userData.push(data);
  }

  returnUser(){
      return this.userData;
  }

  returnUserById(id:number){
    return this.userData.find(p => p.id == id)
  }

  updateUserById(id:any, data:any){
    //find object from array and its index
    let index = this.userData.findIndex(p => p.id == id);
    //update the data
    data.id  =id;
    this.userData[index]=data;

    

  }


  deleteUserById(id:any){
    let index = this.userData.findIndex( p => p.id == id);
    this.userData.splice(index,1);
  }
 

}
