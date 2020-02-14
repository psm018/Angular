import { MOBPARTS } from "./mock";
import { Component } from "@angular/core";

import { MobParts } from "./mob-parts";

@Component({
  selector: "app-mob-parts",
  templateUrl: "./mob-parts.component.html",
  styles: [
    `
      .card {
        height: 490px !important;
      }
    `
  ]
})
export class MobPartsComponent {
  // title:string = "some text goes here...!"

  mobParts: MobParts[] = MOBPARTS;

  calcProd() {
    let sum = 0;

    for (let mobPart of this.mobParts) {
      sum += mobPart.inStock;
    }
    return sum;
  }
}
