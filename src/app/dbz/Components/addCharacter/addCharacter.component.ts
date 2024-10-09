
import {  Component, EventEmitter, Output, output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { ThisReceiver } from '@angular/compiler';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './addCharacter.component.html',
  styleUrl: './addCharacter.component.css',

})

export class AddCharacterComponent {


@Output()
public onNewCharacter :EventEmitter<Character> = new EventEmitter();


public character: Character = {
id:'',
name:'',
power:0


};


emitCharacter():void{

  console.log(this.character)
   if(this.character.name.length===0) return;

  this.character.id = uuid();
  this.onNewCharacter.emit(this.character)
  this.character.name= '';
  this.character.power=0;
}


}
