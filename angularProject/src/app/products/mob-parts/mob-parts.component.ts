import { MOBPARTS } from "./mock";
import { Component, Input } from "@angular/core";

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
  @Input() title_ch: string;
  // title:string = "some text goes here...!"

  mobParts: MobParts[];

  ngOnInit() {
    console.log("ngOnInit Block...!");
    this.mobParts = MOBPARTS;
  }
  constructor() {
    console.log("We are in 'constructor...!");
  }
  ngOnDestroy() {
    console.log("ngOnDestroy Block...!");
    this.mobParts = [];
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit Block...!");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit Block...!");
  }

  calcProd() {
    let sum = 0;

    for (let mobPart of this.mobParts) {
      sum += mobPart.inStock;
    }
    return sum;
  }

  downQntt(mobPart) {
    if (mobPart.qntt != 0) mobPart.qntt--;
  }

  upQntt(mobPart) {
    if (mobPart.qntt < mobPart.inStock) mobPart.qntt++;
  }

  catchQntt(event) {
    console.clear();
    console.log(event);
  }
}
