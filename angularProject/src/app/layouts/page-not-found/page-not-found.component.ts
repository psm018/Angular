import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-page-not-found",
  templateUrl: "./page-not-found.component.html",
  styles: []
})
export class PageNotFoundComponent {
  errorPage: string = "./../../../assets/img/404.jpg";
}
