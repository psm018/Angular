import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

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
    HostDirective
  ],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
