// import { MOBPARTS } from "./../products/mob-parts/mock";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { map } from "rxjs/operators";

@Injectable()
export class MobDataService {
  constructor(private http: Http) {}
  getMobParts() {
    // return MOBPARTS;

    return this.http
      .get("../../assets/api/mob-parts.json")
      .pipe(map(response => response.json().data));
  }
}
