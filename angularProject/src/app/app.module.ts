import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule
} from "@angular/material";

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
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule
  ],
  bootstrap: [AppComponent],
  providers: [AuthGuard, MobDataService]
})
export class AppModule {}
