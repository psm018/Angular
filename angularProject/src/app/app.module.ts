import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { firebaseConfig } from "./firebase/firebase.config";

import { AppComponent } from "./app.component";
import { NavComponent } from "./layouts/nav/nav.component";
import { BannerOneComponent } from "./layouts/banner-one/banner-one.component";
import { ProductsComponent } from "./layouts/products/products.component";
import { BannerTwoComponent } from "./layouts/banner-two/banner-two.component";
import { BannerThreeComponent } from "./layouts/banner-three/banner-three.component";
import { ContactUsComponent } from "./layouts/contact-us/contact-us.component";
import { FooterComponent } from "./layouts/footer/footer.component";
import { MobPartsComponent } from "./products/mob-parts/mob-parts.component";
import { BooksComponent } from "./products/books/books.component";
import { PensComponent } from "./products/pens/pens.component";
import { FirstDirective } from "./directives/first.directive";
import { HostDirective } from "./directives/host.directive";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from "./layouts/home/home.component";
import { PageNotFoundComponent } from "./layouts/page-not-found/page-not-found.component";
import { MotoComponent } from "./products/mob-parts/moto/moto.component";
import { SamsungComponent } from "./products/mob-parts/samsung/samsung.component";
import { MobileMenuComponent } from "./products/mob-parts/mobile-menu/mobile-menu.component";

import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AuthGuard } from "./auth.guard";
import { MobDataService } from "./services/mob-part.service";
import { TempComponent } from "./forms/temp/temp.component";
import { ReactComponent } from "./forms/react/react.component";
import { MaterialDummyModule } from "./modules/mat/mat.module";
import { DataTableComponent } from './grid/data-table/data-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BannerOneComponent,
    ProductsComponent,
    BannerTwoComponent,
    BannerThreeComponent,
    ContactUsComponent,
    FooterComponent,
    MobPartsComponent,
    BooksComponent,
    PensComponent,
    FirstDirective,
    HostDirective,
    PageNotFoundComponent,
    HomeComponent,
    MotoComponent,
    SamsungComponent,
    MobileMenuComponent,
    LoginComponent,
    DashboardComponent,
    TempComponent,
    ReactComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    MaterialDummyModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  bootstrap: [AppComponent],
  providers: [AuthGuard, MobDataService]
})
export class AppModule {}
