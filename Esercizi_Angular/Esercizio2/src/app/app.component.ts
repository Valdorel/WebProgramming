import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showParagraph = false;
  buttonClicked: number[] = [];


  onToggleDisplay() {
    this.showParagraph = !this.showParagraph;
    this.buttonClicked.push(this.buttonClicked.length + 1);
  }
}
