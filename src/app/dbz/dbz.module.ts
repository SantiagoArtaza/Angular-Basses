import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { MainPage } from './pages/main-page.component';
import { ListComponentdbz } from './Components/list/list.component';
import { AddCharacterComponent } from './Components/addCharacter/addCharacter.component';




@NgModule({
  declarations: [
   MainPage,
   ListComponentdbz,
   AddCharacterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
],
  exports:[
    MainPage


  ],

})
export class DbzModule { }
