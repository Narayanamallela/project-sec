import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { CrudComponent } from './crud/crud.component';

const routes: Routes = [
  { path:'',component:ContactComponent},
  { path:'contact',component:ContactComponent},
  {path:'crud',component:CrudComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
