import { NgModule } from '@angular/core';
import { AddComponent } from "./components/add/add.component";
import { SearchComponent } from "./components/search/search.component";
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =
  [
    { path: 'search', component: SearchComponent },
    { path: 'add', component: AddComponent },
    { path: '**', redirectTo: '/search', pathMatch: 'full' } 
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
