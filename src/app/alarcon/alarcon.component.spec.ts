import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarconComponent } from './alarcon.component';

describe('AlarconComponent', () => {
  let component: AlarconComponent;
  let fixture: ComponentFixture<AlarconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlarconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
