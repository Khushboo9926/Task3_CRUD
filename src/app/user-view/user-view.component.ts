import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})

export class UserViewComponent implements OnInit {
  fb:FormBuilder = new FormBuilder;
  userForm:any
  currentId = 0;


  constructor(private userService:UserService, private activatedRoute:ActivatedRoute) {
    this.currentId =this.activatedRoute.snapshot.params.id;
   }

   ngOnInit(): void {
    let currentUserData = this.userService.returnUserById(this.currentId);

    this.userForm = this.fb.group({
      "username":this.fb.control("", Validators.required),
      "position":this.fb.control("", Validators.required),
      "office":this.fb.control("", Validators.required),
      "age":this.fb.control("", Validators.required)
    })

    this.userForm.patchValue(currentUserData);
  }


}