import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MyserviceService } from "./../services/myservice.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  providers: [MyserviceService]
})
export class LoginComponent implements OnInit {
  constructor(private service: MyserviceService, private routes: Router) {}

  msg;
  ngOnInit() {}

  check(uname: string, p: string) {
    var output = this.service.checkUserNameAndPassword(uname, p);
    if (output == true) {
      this.routes.navigate(["/dashboard"]);
    } else {
      this.msg = "Invalid username or password";
    }
  }
}
