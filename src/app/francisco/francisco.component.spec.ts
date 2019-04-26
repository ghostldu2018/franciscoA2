import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FranciscoComponent } from './francisco.component';

describe('FranciscoComponent', () => {
  let component: FranciscoComponent;
  let fixture: ComponentFixture<FranciscoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FranciscoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FranciscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
