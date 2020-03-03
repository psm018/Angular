import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-temp",
  templateUrl: "./temp.component.html"
})
export class TempComponent {
  sendData(uName) {
    console.log(uName);
  }

  showData(myForm) {
    console.log(myForm);
  }
}
