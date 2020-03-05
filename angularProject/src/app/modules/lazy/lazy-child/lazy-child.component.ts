import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-lazy-child",
  template: `
    <h1>
      lazy-child works!
    </h1>
  `,
  styles: []
})
export class LazyChildComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
