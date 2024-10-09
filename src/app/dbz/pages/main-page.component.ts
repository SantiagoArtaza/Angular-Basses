import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { dbzService } from '../services/dbz.service';


@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPage {

constructor(private dbzservice:dbzService){
}
get characters():Character[]{
  return [...this.dbzservice.characters];
}

 onDeleteCharacter(id:string):void{
this.dbzservice.DeleteCharacterByID(id)
}
onNewCharacter(character:Character):void{
  this.dbzservice.AddCharacter(character)
}

}
