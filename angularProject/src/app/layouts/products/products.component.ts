import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styles: [
    `
      .text-box {
        background-color: grey;
        color: #fff;
      }
    `
  ]
})
export class ProductsComponent {
  title = "Angular Welcomes You..!";

  dummyArr = ["Pune", "Mumbai", "Nagpur"];
}
