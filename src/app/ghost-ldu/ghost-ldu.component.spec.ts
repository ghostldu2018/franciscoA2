import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GhostLDUComponent } from './ghost-ldu.component';

describe('GhostLDUComponent', () => {
  let component: GhostLDUComponent;
  let fixture: ComponentFixture<GhostLDUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GhostLDUComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GhostLDUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
