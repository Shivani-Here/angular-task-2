import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
  { path: 'header', component : HeaderComponent},
  { path: 'form', component : FormComponent},
  { path: 'task', component : TaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
