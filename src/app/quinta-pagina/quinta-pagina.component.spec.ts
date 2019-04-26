import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuintaPaginaComponent } from './quinta-pagina.component';

describe('QuintaPaginaComponent', () => {
  let component: QuintaPaginaComponent;
  let fixture: ComponentFixture<QuintaPaginaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuintaPaginaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuintaPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
