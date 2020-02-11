import { Component } from "@angular/core";

@Component({
  selector: "app-start",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  title = "Angular Welcomes You..!";

  dummyArr = ["Pune", "Mumbai", "Nagpur"];

  mobParts = [
    {
      name: "Mobile Screen",
      id: 1001
    },
    {
      name: "Mobile Screen 5",
      id: 1002
    },
    {
      name: "Mobile Screen 5.5",
      id: 1003
    }
  ];
}
