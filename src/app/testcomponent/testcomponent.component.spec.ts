/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import {TestcomponentComponent} from './testcomponent.component';

describe('TestcomponentComponent', () => {
  let component: TestcomponentComponent;
  let fixture: ComponentFixture<TestcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestcomponentComponent],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should sayHello', () => {
    let testComp = new TestcomponentComponent();
    testComp.firstName = 'Mahdi';
    testComp.lastName = 'kallel';
    expect(testComp.sayHello()).toBe('HelloMahdi kallel');
    /**/
  });

  it('should calculate', () => {
    //Arrange
    let testComp = new TestcomponentComponent();
    //Act
    testComp.a = 2;
    testComp.b = 5;
    //Assertion
    expect(testComp.calculate(testComp.a, testComp.b)).toBe(9);
    /**/
  });
  let testComp = new TestcomponentComponent();
  it('it should increment myNumber', () => {


    testComp.upNumber();
    //console.log("it should increment");
    expect(testComp.myNumber).toBe(1);
    /**/
  });

  it('it should  decrement myNumber', () => {
    testComp.downNumber();
    expect(testComp.myNumber).toBe(0);
    /*unit test*/


    var n:number;
    /*---------------*/
    /*---------------*/
    /*---------------*/


  });
});
