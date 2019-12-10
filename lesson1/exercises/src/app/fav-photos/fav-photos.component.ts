import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photo Gallery';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Trunc-icosa.jpg';
  image3 = 'https://upload.wikimedia.org/wikipedia/commons/1/12/Knot_table.svg';

  constructor() { }

  ngOnInit() {
  }

}