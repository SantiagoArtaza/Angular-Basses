import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',

})
export class ListComponentdbz {


  @Input()
  public characterList: Character[]=[{
    id: 'das',
    name: 'trunks',
    power: 10
  }]


@Output()
 public onDeleteCharacter:EventEmitter<string> =new EventEmitter();

odnDeleteId():number{

  return 1;
}


DeleteCharacterByID(id:string):void{
this.onDeleteCharacter.emit(id)

 }
}
