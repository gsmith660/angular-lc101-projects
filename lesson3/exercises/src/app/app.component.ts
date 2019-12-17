import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';

  takeOffEnabled = true;
  moveable = {
    up: true,
    down: true,
    right: true,
    left: true
  };

  handleTakeOff(rocketImage) {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
      this.color = 'blue';
      this.height = 10000;
      this.width = 0;
      this.message = 'Shuttle in flight.';
      rocketImage.style.bottom = '10px';
      this.takeOffEnabled = false;
    }
  }

  handleLand(rocketImage) {
    window.alert('The shuttle is landing. Landing gear engaged.');
    this.color = 'green';
    this.height = 0;
    this.width = 0;
    this.message = 'The shuttle has landed.';
    rocketImage.style.left = '0px';
    rocketImage.style.bottom = '0px';
    this.takeOffEnabled = true;
  }

  handleAbort(rocketImage) {
    let result = window.confirm('Are you sure you want to abort the mission?');
    if (result) {
      this.color = 'red';
      this.height = 0;
      this.width = 0;
      this.message = 'Mission aborted.';
      rocketImage.style.left = '0px';
      rocketImage.style.bottom = '0px';
      this.takeOffEnabled = true;
    }
  }

  moveRocket(rocketImage, direction) {
    if (direction === 'right') {
      let movement = parseInt(rocketImage.style.left) + 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width + 10000;
    }
    if (direction === 'left') {
      let movement = parseInt(rocketImage.style.left) - 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width - 10000;
    }
    if (direction === 'up') {
      let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height + 10000;
    }
    if (direction === 'down') {
      let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height - 10000;
    }
    console.log(rocketImage);
    let bkgdWidth = rocketImage.parentElement.offsetWidth;
    let bkgdHeight = rocketImage.parentElement.offsetHeight;
    if (this.width < -10000 * 1) {
      this.moveable.left = false;
    } else {
      this.moveable.left = true;
    }
    if (10000 * ((bkgdWidth - 75) / 10 + 1) < this.width) {
      this.moveable.right = false;
    } else {
      this.moveable.right = true;
    }
    if (this.height < 10000) {
      this.moveable.down = false;
    } else {
      this.moveable.down = true;
    }
    if (10000 * (bkgdHeight - 75) / 10 < this.height) {
      this.moveable.up = false;
    } else {
      this.moveable.up = true;
    }
    if (!(this.moveable.up && this.moveable.down && this.moveable.left && this.moveable.right)) {
      this.color = 'orange';
    } else {
      this.color = 'blue';
    }
  }
}
