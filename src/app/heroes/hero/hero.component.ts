import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

   public name : string = 'iroman';
   public age : number = 45

   get CapitalizedName():string{

      return this.name.toUpperCase();
   }

   getDescription():string{

       return ` ${this.name} - ${this.age}`;

   }

   nameChange(){
      this.name='spiderman';
   }

   ageChange(){
      this.age=27;
   }

   resetForm(){
      this.name='iroman';
      this.age=45;
   }
}
