import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userList:Array<any>=[]
  currentId:any;
  constructor(private activeRoute: ActivatedRoute, private userService:UserService, private route:Router){
    this.currentId = activeRoute.snapshot.params.id ;
  }
//   ngOnInit(): void {
//    this.userList= this.userService.returnUser();
//   }


//   deleteuser(id:any){
//     this.userService.deleteUserById(id);    
  
// }
  
ngOnInit(): void {
  this.loadUser()
}

loadUser(){
  this.userService.returnUser().subscribe((res:any)=>{
    this.userList= res
   });
}

deleteuser(id:any){
  //this.productService.deleteProductById(id);    
  this.userService.deleteUserById(id).subscribe(()=>{
    this.loadUser();
  })

}
}

