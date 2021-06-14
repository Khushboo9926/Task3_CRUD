import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardComponent } from './card/card.component';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserViewComponent } from './user-view/user-view.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    DashboardComponent,
    CardComponent,
    ProductComponent,
    UserComponent,
    ProductCreateComponent,
    ProductEditComponent,
    ProductViewComponent,
    UserCreateComponent,
    UserEditComponent,
    UserViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
