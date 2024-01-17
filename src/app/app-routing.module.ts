import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import { PadreComponent } from './Component/padre/padre.component';
import { HijoComponent } from './Component/hijo/hijo.component';
import { Hijo2Component } from './Component/hijo2/hijo2.component';
import { AppComponent } from './app.component';
const routes: Routes = [

  {path: '', redirectTo:'Home', pathMatch: 'full'},
  {path: 'Home', component:PadreComponent},
  {path: 'Hijo', component:HijoComponent},
  {path: 'Hijo2', component:Hijo2Component},
];


@NgModule({
  imports: [RouterModule.forRoot(routes),
    MatTableModule
  ],
  exports: [RouterModule,
    MatTableModule
  ]
})
export class AppRoutingModule { }
