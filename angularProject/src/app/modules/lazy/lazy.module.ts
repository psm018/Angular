import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LazyChildComponent } from "./lazy-child/lazy-child.component";
import { Routes, RouterModule } from "@angular/router";

const routsLazy: Routes = [
  { path: "lazy-child", component: LazyChildComponent }
];

@NgModule({
  declarations: [LazyChildComponent],
  imports: [CommonModule, RouterModule.forChild(routsLazy)]
})
export class LazyModule {}
