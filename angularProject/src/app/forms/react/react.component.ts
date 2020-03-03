import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-react",
  templateUrl: "./react.component.html"
})
export class ReactComponent {
  formGroupName = new FormGroup({
    uName: new FormControl("", Validators.required)
  });
}
