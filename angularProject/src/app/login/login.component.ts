import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

// step 7: import 'AuthService' and 'Router'

import { MyserviceService } from "./../services/myservice.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  providers: [MyserviceService]
})
export class LoginComponent implements OnInit {
  // step 9: add 'AuthService' & 'Router' as 'DI'
  constructor(private service: MyserviceService, private routes: Router) {}

  // step 10: declare 'msg' identifier for user notification
  msg;
  ngOnInit() {}

  // step 11: define 'check()' method to call service method for validation
  // for step 12 go to 'auth.guard.ts'

  check(uname: string, p: string) {
    var output = this.service.checkUserNameAndPassword(uname, p);
    if (output == true) {
      this.routes.navigate(["/dashboard"]);
    } else {
      this.msg = "Invalid username or password";
    }
  }
}
