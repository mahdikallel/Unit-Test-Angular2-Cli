import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-testcomponent',
  templateUrl: './testcomponent.component.html',
  styleUrls: ['./testcomponent.component.css']
})
export class TestcomponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /* Unit test*/
  @Input()firstName: string;
  @Input()lastName: string;

  a:number;
  b:number;

  myNumber = 0;

  upNumber(){
    this.myNumber ++ ;
  }


  downNumber(){
    this.myNumber -- ;
  }

  public sayHello(){
    //console.log("Hello" + this.firstName + " " + this.lastName);
    return "Hello" + this.firstName + " " + this.lastName;
  }

  public calculate(a,b){
    return a+b;
  }

  /*----------End unit test-----------*/

}
