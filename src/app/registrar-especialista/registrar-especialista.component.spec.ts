import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarEspecialistaComponent } from './registrar-especialista.component';

describe('RegistrarEspecialistaComponent', () => {
  let component: RegistrarEspecialistaComponent;
  let fixture: ComponentFixture<RegistrarEspecialistaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarEspecialistaComponent]
    });
    fixture = TestBed.createComponent(RegistrarEspecialistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
