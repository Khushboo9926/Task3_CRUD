import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  fb:FormBuilder=new FormBuilder;
  userForm:any;
  constructor(private userService:UserService, private route:Router) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      "username":this.fb.control("", Validators.required),
      "position":this.fb.control("", Validators.required),
      "office":this.fb.control("", Validators.required),
      "age":this.fb.control("", Validators.required)
    })
  }

  submitForm(){
    this.userService.addUser(this.userForm.value);
    this.route.navigate(["/user"])

}
}