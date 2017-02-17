/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {TestcomponentComponent} from './testcomponent.component';

describe('TestcomponentComponent', () => {
  let component: TestcomponentComponent;
  let fixture: ComponentFixture<TestcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestcomponentComponent]
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
    let testComp = new TestcomponentComponent();
    testComp.a = 2;
    testComp.b = 5;
    expect(testComp.calculate(testComp.a, testComp.b)).toBe(7);
    /**/
  });
  let testComp = new TestcomponentComponent();
  it('it should increment myNumber', () => {


    testComp.upNumber();
    //console.log("it should increment");
    expect(testComp.myNumber).toBe(10);
    /**/
  });

  it('it should  decrement myNumber', () => {
    testComp.downNumber();
    expect(testComp.myNumber).toBe(0);
    /*unit test */
  });
});
