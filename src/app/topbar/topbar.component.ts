import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }


  logout(){
    window.localStorage.removeItem("authtoken");
    this.route.navigate(["/login"]);
  }
}
