import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { MobPartsComponent } from "./products/mob-parts/mob-parts.component";
import { BooksComponent } from "./products/books/books.component";
import { HomeComponent } from "./layouts/home/home.component";
import { PageNotFoundComponent } from "./layouts/page-not-found/page-not-found.component";
import { MobileMenuComponent } from "./products/mob-parts/mobile-menu/mobile-menu.component";
import { SamsungComponent } from "./products/mob-parts/samsung/samsung.component";
import { MotoComponent } from "./products/mob-parts/moto/moto.component";

import { AuthGuard } from "./auth.guard";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  {
    path: "dashboard",
    canActivate: [AuthGuard],
    component: DashboardComponent
  },

  { path: "home", component: HomeComponent },
  {
    path: "mobile",
    component: MobileMenuComponent,
    children: [
      {
        path: "",
        component: MobPartsComponent
      },
      {
        path: "moto",
        component: MotoComponent
      },
      {
        path: "samsung",
        component: SamsungComponent
      }
    ]
  },
  { path: "lazy", loadChildren: "./modules/lazy/lazy.module#LazyModule" },
  { path: "books", component: BooksComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
