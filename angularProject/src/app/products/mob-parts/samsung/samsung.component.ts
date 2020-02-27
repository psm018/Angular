import { Component, OnInit } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";

@Component({
  selector: "app-samsung",
  templateUrl: "./samsung.component.html",
  styleUrls: ["./samsung.component.css"]
})
export class SamsungComponent {
  mobData: any[];
  constructor(db: AngularFireDatabase) {
    db.list("/data")
      .valueChanges()
      .subscribe(mobParts => {
        this.mobData = mobParts;
        console.log(this.mobData);
      });
  }
}
