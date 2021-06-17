import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductViewComponent } from './product-view/product-view.component';


import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserViewComponent } from './user-view/user-view.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "dashboard",
    component: DashboardContainerComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "",
        component: DashboardComponent
      },
      {
        path: "user",
        component: UserComponent
      },
      {
        path: "product",
        component: ProductComponent,
      },
      {
        path: "product-create",
        component: ProductCreateComponent
      },
      {
        path: "product-edit/:id",
        component: ProductEditComponent
      },
      {
        path: "product-view/:id",
        component: ProductViewComponent
      },

      {
        path: "user-create",
        component: UserCreateComponent
      },
      {
        path: "user-edit/:id",
        component: UserEditComponent
      },
      {
        path: "user-view/:id",
        component: UserViewComponent
      }


    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
