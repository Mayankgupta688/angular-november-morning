import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { DetailsComponent } from './component/details/details.component';
import { HelpComponent } from './component/help/help.component';
import { HomeComponent } from './component/home/home.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "help", component: HelpComponent},
  {path: "about", component: AboutComponent},
  {path: "details/:id/:name", component: DetailsComponent},
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
