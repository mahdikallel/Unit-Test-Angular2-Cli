import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  subtitle = 'hello';
  time: number = 55;
  private x: string;
  private somme: number;

  addNumber() {
    this.printConsole();
  }

  private printConsole() {
    console.log("mahdi kallel");
    console.log("ahmed");
  }

}
