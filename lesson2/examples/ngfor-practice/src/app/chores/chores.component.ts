import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = {
      'Yesterday\'s Chores': ['Empty dishwasher', 'Start LaunchCode prep work', 'Buy groceries'],
      'Today\'s Chores': ['Load dishwasher', 'Finish LaunchCode prep work', 'Buy the groceries you forgot'],
      "Tomorrow's Chores": ['Empty dishwasher AGAIN', 'Play with LaunchCode practice code', 'Groceries, AGAIN']
   };
   todoTitles = ["Yesterday's Chores", "Today's Chores", "Tomorrow's Chores"];

   constructor() { }

   ngOnInit() {
   }

}
