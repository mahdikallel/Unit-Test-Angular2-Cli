import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TestcomponentComponent} from "./testcomponent/testcomponent.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: TestcomponentComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
