/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BuildNowComponent } from './build-now.component';

describe('BuildNowComponent', () => {
  let component: BuildNowComponent;
  let fixture: ComponentFixture<BuildNowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildNowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
