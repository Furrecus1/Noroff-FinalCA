import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificPageComponent } from './specific-page.component';

describe('SpecificPageComponent', () => {
  let component: SpecificPageComponent;
  let fixture: ComponentFixture<SpecificPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
