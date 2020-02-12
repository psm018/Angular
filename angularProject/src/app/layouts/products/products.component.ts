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

  mobParts = [
    {
      name: "Mobile Screen",
      id: 1001,
      inStock: 350,
      prodColor: "red",
      isOnline: true,
      country: "Australia"
    },
    {
      name: "Mobile Screen 5",
      id: 1002,
      inStock: 350,
      prodColor: "blue",
      isOnline: true,
      country: "India"
    },
    {
      name: "Mobile Screen 5.5",
      id: 1003,
      inStock: 0,
      prodColor: "green",
      isOnline: false,
      country: ""
    }
  ];
}
