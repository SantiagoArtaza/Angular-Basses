import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {  v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class dbzService {

  public characters:Character[]= [{
    id: uuid(),
    name: 'krillin',
    power: 1000
    },
    {
      id: uuid(),
      name:'goku',
      power: 9500
    },{
      id: uuid(),
    name:'vegeta',
    power: 7500
  }
];
AddCharacter(character:Character):void{
  const newcharacter:Character = {...character };

  this.characters.push(newcharacter)
}

// onDeleteCharacter(index:number):void{
// let eliminate= this.characters.splice(index,1);
// console.log(eliminate)

// }

DeleteCharacterByID(id:string){
this.characters = this.characters.filter(character => character.id !== id);
}



}
