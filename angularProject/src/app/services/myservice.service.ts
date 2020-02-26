import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class MyserviceService {
  constructor() {}
  checkUserNameAndPassword(uname: string, pwd: string) {
    if (uname == "admin" && pwd == "admin") {
      // use localStorage to save username in TempMemory
      localStorage.setItem("username", "admin");

      //  for step 6 go to 'login.component.html'
      return true;
    } else {
      return false;
    }
  }
}
