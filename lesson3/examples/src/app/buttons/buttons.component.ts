import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   inactiveGold: boolean = false;
   inactiveSilver: boolean = false;
   inactiveCopper: boolean = false;
   jokeButtonHeading: string = "Joke Buttons"
   inactiveFrustration: boolean = false;
   positions: string[] = [
      'left',
      'center',
      'right'
   ];
   posIndex: number = 1;

   constructor() { }

   ngOnInit() { }

   activate() {
      this.inactiveGold = false;
      this.inactiveSilver = false;
      this.inactiveCopper = false;
   }

   newPosition(): number {
      let position = Math.floor(Math.random() * this.positions.length);
      while (position === this.posIndex) {
         position = Math.floor(Math.random() * this.positions.length);
      }
      console.log('posIndex:', position)
      return position;
   }

}
