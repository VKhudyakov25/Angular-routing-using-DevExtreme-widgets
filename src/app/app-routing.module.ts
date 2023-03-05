import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';

// const routes: Routes = [
//   { path: 'first-component', component: FirstComponent },
//   { path: 'second-component', component: SecondComponent },
//   { path: 'third-component', component: ThirdComponent },
//   { path: '', redirectTo: '/first-component', pathMatch: 'full' },
// ];

const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'components/first', component: FirstComponent },
  { path: 'components/second', component: SecondComponent },
  { path: 'components/third', component: ThirdComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
