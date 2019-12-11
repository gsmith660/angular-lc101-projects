import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = [
    'https://gsmith660.github.io/html-me-somthing/',
    'https://education.launchcode.org/',
  ];

  constructor() { }

  ngOnInit() {
  }

}
